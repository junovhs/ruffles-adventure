let currentLocation = '';
let characterStats = {
    chaos: 0,
    streetSmarts: 0,
    luck: 0,
    hygiene: 100
};
let goblinMeter = 0;

function updateCharacterInfo() {
    // Update character stats display
}

function updateGoblinMeter() {
    // Update goblin meter display
}

function loadScene(sceneName) {
    // Load scene content and choices
}

function makeChoice(choice) {
    // Handle player choices and update game state
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the game
    currentLocation = window.location.pathname.split('/').pop().replace('.html', '');
    loadScene(currentLocation);
    updateCharacterInfo();
    updateGoblinMeter();
});