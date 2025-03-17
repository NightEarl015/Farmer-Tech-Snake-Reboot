BlockEvents.broken('minecraft:grass', event => {
  const world = event.world;
  const blockPos = event.block.pos;

  // Define the list of items to remove
  const itemsToRemove = new Set([
    "minecolonies:bell_pepper",
    "minecolonies:cabbage",
    "minecolonies:chickpea",
    "minecolonies:eggplant",
    "minecolonies:garlic",
    "minecolonies:onion",
    "minecolonies:soybean",
    "minecolonies:tomato",
    "minecolonies:garlic",
    "minecolonies:nether_pepper",
    "minecolonies:corn",
    "minecolonies:rice"
  ]);

  world.getEntitiesWithin(AABB.of(blockPos).inflate(1), entity => {
      if (entity.type === "minecraft:item" && itemsToRemove.has(entity.item.id)) {
          entity.kill(); 
      }
  });
});

BlockEvents.broken("minecraft:grass", event => {

  let { block, player, level } = event
  let item = player.mainHandItem

  if (item.hasTag("#minecraft:pickaxes")) return;

  block.set("minecraft:cobblestone")
  block.popItem('minecraft:white_wool') // test item
  event.cancel()
})
