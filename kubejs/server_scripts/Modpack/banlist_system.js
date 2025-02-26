// Banning lists and removing the recipe system
// Authored by MtpDev

let bannedItems = [
    'createendertransmission:chunk_loader', 
    'ae2:inscriber'    
]; // Add more items as needed

PlayerEvents.inventoryChanged(event => {
  let player = event.player;
  let inventory = player.inventory.items; // NeoForge inventory access

  if (!bannedItems.includes(event.item.id)) return;

  // Alert the player
  player.tell([
    Text.darkRed("[Alert] ").bold(), 
    Text.gold(event.item.id).bold(), 
    Text.gray(" has been removed in this modpack."),
    "\n",
    Text.green("If you have any questions, please ask dev.")
  ]);

  // Remove all instances of the banned item
  for (let i = 0; i < inventory.length; i++) {
    let slotItem = inventory[i];
    if (slotItem && slotItem.id === event.item.id) {
      slotItem.count = 0; // Clears the stack
    }
  }
});

ServerEvents.recipes(event => {
  bannedItems.forEach(item => {
    event.remove({ output: item });
  });
});
