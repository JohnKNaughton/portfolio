const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const bearScoreEl = document.getElementById('bear-score');
const timerEl = document.getElementById('timer');
const overlay = document.getElementById('game-over-overlay');
const winnerText = document.getElementById('winner-text');
// Target the stat line in your HTML
const personalStatEl = document.getElementById('personal-stat');

// Game State
let score = 0;
let bearScore = 0;
let timeLeft = 30;
let salmonArray = [];
let seals = [];
let gameActive = true;
let gameInterval; 

// Constants for "Cuteness" and Hitboxes
const SPRITE_SIZE = 65; 
const HITBOX_RADIUS = 60; 
const SEAL_SPREAD = 150; 

class Salmon {
    constructor() {
        this.x = -50;
        this.y = Math.random() * (canvas.height - 100) + 50;
        this.speed = Math.random() * 2.5 + 2;
    }
    update() {
        this.x += this.speed;
    }
    draw() {
        ctx.font = `${SPRITE_SIZE}px serif`;
        ctx.fillText("🐟", this.x, this.y);
    }
}

function update() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Banks
    ctx.fillStyle = "#d2eeb7"; 
    ctx.fillRect(0, 0, 60, canvas.height);
    ctx.fillStyle = "#0c4404"; 
    ctx.fillRect(canvas.width - 60, 0, 60, canvas.height);

    // Draw Stationary Bears on the bank
    ctx.font = "45px serif";
    for(let i = 0; i < canvas.height; i += 80) {
        ctx.fillText("🐻", canvas.width - 55, i + 60);
    }

    // Spawn Salmon
    if (Math.random() < 0.09) {
        salmonArray.push(new Salmon());
    }

    // Process Salmon
    for (let sIdx = salmonArray.length - 1; sIdx >= 0; sIdx--) {
        let s = salmonArray[sIdx];
        s.update();
        s.draw();

        // 🐻 BEAR SCORING
        if (s.x > canvas.width - 85) {
            bearScore++;
            bearScoreEl.innerText = bearScore;
            salmonArray.splice(sIdx, 1);
            continue;
        }

        // 🦭 SEAL SCORING (Collision)
        for (let sealIdx = seals.length - 1; sealIdx >= 0; sealIdx--) {
            let seal = seals[sealIdx];
            let dist = Math.hypot(s.x - seal.x, s.y - seal.y);
            
            if (dist < HITBOX_RADIUS) {
                salmonArray.splice(sIdx, 1);
                score++;
                scoreEl.innerText = score;
                break; 
            }
        }
    }

    // Draw Seals (The Buoys)
    ctx.font = "65px serif";
    seals.forEach(seal => {
        ctx.fillText("🦭", seal.x - 30, seal.y + 25);
    });

    requestAnimationFrame(update);
}

// Deploy Seals with a wide spread
canvas.addEventListener('mousedown', (e) => {
    if (!gameActive) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Adding 2 seals as per your logic
    for(let i = 0; i < 2; i++) {
        seals.push({ 
            x: mouseX + (Math.random() * SEAL_SPREAD - SEAL_SPREAD/2), 
            y: mouseY + (Math.random() * SEAL_SPREAD - SEAL_SPREAD/2)
        });
    }

    // Seals leave the screen after a short time
    setTimeout(() => {
        if (gameActive) {
            // Match the number added (2)
            for(let i = 0; i < 2; i++) seals.shift();
        }
    }, 800);
});

// Start Timer
function startTimer() {
    gameInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameActive = false;
    let message = "";
    if (score > bearScore) {
        message = "The Two Proactive Seals caught the majority of the Salmon! ";
    } else if (bearScore > score) {
        message = "The Patient Bears are the champions of Salmon catching!";
    } else {
        message = "It's a perfect tie! All animals are dope huh";
    }
    
    // Update the winner text
    winnerText.innerText = message;
    
    // Show the personal count!
    if(personalStatEl) {
        personalStatEl.innerText = `Good job! You caught ${score} fish for the feast!`;
    }
    
    overlay.style.display = "block";
}

// Reset Game Function
window.resetGame = function() {
    score = 0;
    bearScore = 0;
    timeLeft = 30;
    salmonArray = [];
    seals = [];
    gameActive = true;
    
    scoreEl.innerText = score;
    bearScoreEl.innerText = bearScore;
    timerEl.innerText = timeLeft;
    overlay.style.display = "none";
    
    clearInterval(gameInterval);
    startTimer();
    update();
};

// Initialize
startTimer();
update();