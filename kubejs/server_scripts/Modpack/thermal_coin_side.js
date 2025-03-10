// The script provides both sides of the coin
// Original by ChatGPT
// Edited by NightEarl015


// Handle right-click interactions
ItemEvents.rightClicked(event => {
    let item = event.item;

    // Ensure the event is triggered by a player
    if (!event.entity || !event.entity.isPlayer()) return;

    let player = event.entity; // Define the player explicitly as the one who used the coin

    if (item.id === 'kubejs:thermal_coin') {
        // Check if the stack size is 1 or less
        if (item.count <= 1) {
            // Simulate coin toss (50% chance for Obverse or Reverse)
            let result = Math.random() < 0.5 ? "§lObverse§r" : "§lReverse§r";

            // Send result to the player
            player.tell(`§6You flipped a coin and counted down to the result: ${result}.`);

            // Apply cooldown of 10 seconds (200 ticks)
            player.addItemCooldown('kubejs:thermal_coin', 200);
        } else {
            player.tell(`§cYou need to have only 1 coin to flip it.`);
        }
    }
});



