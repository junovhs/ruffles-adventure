function saveGame() {
    const gameState = {
        currentLocation,
        characterStats,
        goblinMeter,
        inventory
    };
    localStorage.setItem('rufflesAdventureSave', JSON.stringify(gameState));
    alert("Game saved, you chaotic goblin!");
}

function loadGame() {
    const savedState = localStorage.getItem('rufflesAdventureSave');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        currentLocation = gameState.currentLocation;
        characterStats = gameState.characterStats;
        goblinMeter = gameState.goblinMeter;
        inventory = gameState.inventory;
        window.location.href = `pages/${currentLocation}.html`;
    } else {
        alert("No saved game found. Start a new chaotic adventure!");
    }
}

document.getElementById('save-game').addEventListener('click', saveGame);
document.getElementById('load-game').addEventListener('click', loadGame);