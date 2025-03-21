// All tweaks to Lightmans Currency
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {

  // Defining Parts
  const lightmanscurrencytypes = [
      'boss', 'chest', 'entity'
  ]; // Defining types

  const lightmanscurrencytiers = [
      'tier1', 'tier2', 'tier3', 'tier4', 'tier5',  'tier6'
  ]; // Defining tiers

  // Similar loottable datapacks
  lightmanscurrencytypes.forEach(lightmanscurrencytiertype => {
    lightmanscurrencytiers.forEach(lightmanscurrencytiertier => {
      events.addJson(`lightmanscurrency:loot_tables/loot_addons/${lightmanscurrencytiertype}/${lightmanscurrencytiertier}`, {
          type: "minecraft:empty",
          pools: [],
          random_sequence: `lightmanscurrency:loot_addons/${lightmanscurrencytiertype}/${lightmanscurrencytiertier}`  
        })
    });
  });

  // Unique lootable datapack
  events.addJson('lightmanscurrency:loot_tables/misc/ancient_netherite_coins', {
    type: "minecraft:archaeology",
    pools: [],
    random_sequence: "lightmanscurrency:misc/ancient_netherite_coins" 
  })
})