const gameState = {
    // Current Player Data
    player: {
        name: "",
        food: 0,
        trivium: 0,
        credits: 0,
        type: ""
    },
// Add this inside the gameState object
    returnToMenu: function() {
        const confirmQuit = confirm("Are you sure you want to abandon the mission? All progress will be lost.");
        
        if (confirmQuit) {
            // 1. Reset Player Stats
            this.player = {
                name: "",
                food: 0,
                trivium: 0,
                credits: 0,
                type: ""
            };

            // 2. Hide Game and Character screens, Show Menu
            this.gameScreen.classList.add('hidden');
            this.charScreen.classList.add('hidden');
            this.menuScreen.classList.remove('hidden');

            console.log("Mission Aborted. Returned to Command.");
        }
    },
    // DOM Elements - We use getters to ensure elements exist when called
    get introScreen() { return document.getElementById('intro-terminal'); },
    get menuScreen() { return document.getElementById('menu-screen'); },
    get charScreen() { return document.getElementById('char-screen'); },
    get gameScreen() { return document.getElementById('game-screen'); },

    init: function() {
        console.log("Sequence Initiated...");
        
        // FIX: Using arrow function () => preserves 'this' context
        setTimeout(() => {
            this.showMenu();
        }, 9000);
    },

    showMenu: function() {
        if(this.introScreen) this.introScreen.classList.add('hidden');
        if(this.menuScreen) {
            this.menuScreen.classList.remove('hidden');
            this.menuScreen.classList.add('fade-in');
        }
    },

    // Added this back in so your "Initialize Pilot" button works
    showCharacterSelect: function() {
        this.menuScreen.classList.add('hidden');
        this.charScreen.classList.remove('hidden');
        this.charScreen.classList.add('fade-in');
    },

    selectCharacter: function(choice) {
        if (choice === 'latke') {
            this.player = { name: "Latke", food: 20, trivium: 10, credits: 0, type: "latke" };
        } else {
            this.player = { name: "Glenn", food: 10, trivium: 20, credits: 0, type: "glenn" };
        }
        this.enterGame();
    },

    enterGame: function() {
        this.charScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');

        // This part of your existing enterGame function handles it:
const sprite = document.getElementById('pilot-sprite');
if (sprite) {
    sprite.className = ""; // Wipe old pilot
    sprite.classList.add(this.player.type + "-active"); // Adds 'latke-active' or 'glenn-active'
}

        this.updateHUD();
    },

    updateHUD: function() {
        const f = document.getElementById('food-stat');
        const t = document.getElementById('trivium-stat');
        const c = document.getElementById('credits-stat');
        
        if(f) f.innerText = this.player.food;
        if(t) t.innerText = this.player.trivium;
        if(c) c.innerText = this.player.credits;
    },

    showLeaderboard: function() {
        alert("Galactic Records are currently encrypted (Supabase setup pending).");
    }
};

// Run the sequence on load
window.onload = () => gameState.init();