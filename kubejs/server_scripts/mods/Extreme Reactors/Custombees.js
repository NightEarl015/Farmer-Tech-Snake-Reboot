// All Custom Bees compat for Extreme Reactors
// Authored by NightEarl015

ServerEvents.highPriorityData(events => {
  // Datapack gen
  // Custom Bees
  events.addJson('productivebees:productivebees/anglesite', {
    primaryColor: "#F3CC5B",
    secondaryColor: "#DEA400",
    particleColor: "#EFB40C",
    flowerTag: "forge:ores/anglesite",
  })

  events.addJson('productivebees:productivebees/benitoite', {
    primaryColor: "#94DEF7",
    secondaryColor: "#54CBF1",
    particleColor: "#46A8C9",
    flowerTag: "forge:ores/benitoite",
  })

  // Custom Bee Spawning
  events.addJson('productivebees:bee_spawning/anglesite_end_stone_nest', {
    type: "productivebees:bee_spawning",
    ingredient: { item: "productivebees:end_stone_nest"},
    results: [{ bee: "productivebees:anglesite"}],
    spawn_item: { item: "bigreactors:anglesite_crystal"},
    biomes: "#minecraft:is_end",
    conditions: [{ type: "productivebees:bee_exists", bee: "productivebees:anglesite"}]
  })
})