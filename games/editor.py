"""Local edit server for the games page.

Run from anywhere:   python games/editor.py
Then open:           http://127.0.0.1:8765/games/?edit

It serves the portfolio folder like any static server, plus two endpoints the
page's edit mode calls:
  POST /api/upload?name=<filename>   raw file bytes -> saved into games/media/
  POST /api/content                  JSON body      -> written to games/content.json

Large images are downscaled to 1920px wide (needs Pillow; skipped without it).
Only listens on 127.0.0.1, so nothing outside this computer can write files.
Nothing goes online until you commit and push.
"""

import io
import json
import re
import shutil
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

GAMES = Path(__file__).resolve().parent
ROOT = GAMES.parent
MEDIA = GAMES / "media"
CONTENT = GAMES / "content.json"
PORT = 8765
MAX_UPLOAD = 200 * 1024 * 1024
MAX_WIDTH = 1920
RESIZABLE = {".png", ".jpg", ".jpeg", ".webp"}
ALLOWED = RESIZABLE | {".gif", ".mp4", ".webm", ".svg"}

try:
    from PIL import Image
except ImportError:
    Image = None


def safe_name(raw):
    stem, ext = Path(raw).stem, Path(raw).suffix.lower()
    stem = re.sub(r"[^a-z0-9]+", "-", stem.lower()).strip("-") or "asset"
    return stem[:60], ext


def unique_path(stem, ext):
    path = MEDIA / f"{stem}{ext}"
    n = 2
    while path.exists():
        path = MEDIA / f"{stem}-{n}{ext}"
        n += 1
    return path


def optimise(data, ext):
    """Downscale big images. Opaque PNGs become JPEGs, which are far smaller."""
    if Image is None or ext not in RESIZABLE:
        return data, ext
    im = Image.open(io.BytesIO(data))
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if im.width > MAX_WIDTH:
        im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
    elif not (ext == ".png" and not has_alpha):
        return data, ext  # already small and already a sensible format
    out = io.BytesIO()
    if has_alpha:
        im.save(out, "PNG", optimize=True)
        return out.getvalue(), ".png"
    im.convert("RGB").save(out, "JPEG", quality=84, optimize=True, progressive=True)
    return out.getvalue(), ".jpg"


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def reply(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        url = urlparse(self.path)
        length = int(self.headers.get("Content-Length") or 0)
        if length > MAX_UPLOAD:
            return self.reply(413, {"error": "File is over 200 MB"})
        data = self.rfile.read(length)

        if url.path == "/api/ping":
            return self.reply(200, {"ok": True})

        if url.path == "/api/upload":
            name = parse_qs(url.query).get("name", ["asset"])[0]
            stem, ext = safe_name(name)
            if ext not in ALLOWED:
                return self.reply(400, {"error": f"{ext or 'That file type'} isn't supported"})
            try:
                data, ext = optimise(data, ext)
            except Exception as e:  # unreadable image: keep the original bytes
                print("  could not optimise:", e)
            MEDIA.mkdir(exist_ok=True)
            path = unique_path(stem, ext)
            path.write_bytes(data)
            print(f"  saved media/{path.name} ({len(data) // 1024} KB)")
            return self.reply(200, {"src": f"media/{path.name}", "bytes": len(data)})

        if url.path == "/api/content":
            try:
                content = json.loads(data)
            except ValueError:
                return self.reply(400, {"error": "Invalid JSON"})
            if CONTENT.exists():
                shutil.copy(CONTENT, CONTENT.with_suffix(".json.bak"))
            CONTENT.write_text(json.dumps(content, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            print("  saved content.json")
            return self.reply(200, {"ok": True})

        self.reply(404, {"error": "Unknown endpoint"})

    def log_message(self, fmt, *args):
        if self.command == "POST":
            return  # do_POST prints its own one-line summary
        if not str(args[1]).startswith(("2", "3")):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    if Image is None:
        print("Pillow not found: images will be saved at full size (pip install pillow to enable resizing).")
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Games page editor running.\n  Open http://127.0.0.1:{PORT}/games/?edit\n  Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        sys.exit(0)
