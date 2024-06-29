// game.js
let currentLocation = '';
let characterStats = {
    chaos: 0,
    streetSmarts: 0,
    luck: 0,
    hygiene: 100
};
let goblinMeter = 0;

function updateCharacterInfo() {
    document.getElementById('chaos-stat').textContent = characterStats.chaos;
    document.getElementById('street-smarts-stat').textContent = characterStats.streetSmarts;
    document.getElementById('luck-stat').textContent = characterStats.luck;
    document.getElementById('hygiene-stat').textContent = characterStats.hygiene;
}

function updateGoblinMeter() {
    const meterFill = document.getElementById('goblin-meter-fill');
    meterFill.style.width = `${goblinMeter}%`;
    meterFill.style.backgroundColor = goblinMeter >= 100 ? '#ff9900' : '#8b0000';
}

function loadScene(sceneName) {
    currentLocation = sceneName;
    // You would typically load scene content here, but for now we'll just update the UI
    updateCharacterInfo();
    updateGoblinMeter();
}

function makeChoice(choice) {
    switch(choice) {
        case 'investigate_noise':
            characterStats.chaos += 5;
            characterStats.luck += 2;
            characterStats.hygiene -= 10;
            goblinMeter += 10;
            updateSceneContent("As you bravely dive into the dumpster, you discover a half-eaten pizza and a slightly damp pair of mismatched socks. Score! Your chaos and luck increase, but your hygiene takes a hit.");
            addItemToInventory("Half-eaten pizza");
            addItemToInventory("Mismatched socks");
            break;
        case 'greet_rat':
            characterStats.streetSmarts += 5;
            characterStats.hygiene -= 5;
            goblinMeter += 5;
            updateSceneContent("You and Squeakers engage in a riveting discussion about the socioeconomic implications of cheese distribution in the alley. Your street smarts increase, and you feel a deep connection to your rodent brethren.");
            break;
        case 'fashion_show':
            characterStats.chaos += 10;
            characterStats.luck += 5;
            goblinMeter += 15;
            updateSceneContent("Your trash couture fashion show is a smashing success! A passing art critic mistakes it for a avant-garde performance piece. You've accidentally become the toast of the underground art scene.");
            break;
        case 'leave_alley':
            characterStats.streetSmarts += 2;
            goblinMeter += 5;
            updateSceneContent("You venture forth into the bustling city, ready for new adventures. The world is your oyster (or perhaps a slightly less fancy mollusk).");
            // Here you would typically change the location
            // loadScene('city_streets');
            break;
    }
    updateCharacterInfo();
    updateGoblinMeter();
}

function updateSceneContent(text) {
    const content = document.querySelector('.content');
    const p = document.createElement('p');
    p.textContent = text;
    content.insertBefore(p, document.getElementById('choices'));
}

function addItemToInventory(item) {
    if (inventory.length < 5) {
        inventory.push(item);
        updateInventory();
    } else {
        updateSceneContent("Your pockets are full! You reluctantly leave the " + item + " behind.");
    }
}

// Initialize the scene
document.addEventListener('DOMContentLoaded', () => {
    loadScene('dumpster_alley');
});