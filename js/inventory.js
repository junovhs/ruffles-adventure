let inventory = [];

function updateInventory() {
    // Update inventory display
}

function addItem(item) {
    if (inventory.length < 5) {
        inventory.push(item);
        updateInventory();
    } else {
        alert("Your pockets are full, you filthy goblin!");
    }
}

function removeItem(item) {
    const index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
        updateInventory();
    }
}

function useItem(item) {
    // Logic for using items
    removeItem(item);
}