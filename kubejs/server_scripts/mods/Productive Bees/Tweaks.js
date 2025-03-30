// All tweaks to Productive Bees
// Tweaked by NightEarl015

// Recipe utils based on kubejs
// Datapack Gen

ServerEvents.lowPriorityData(event => {
  let customProductivebeesCentrifugeRecipes = (beetype, output, modid) => {
    let customProductivebeesCentrifugeRecipeJson = JsonIO.toObject(
      {
        type: "productivebees:centrifuge",
        ingredient: {
          type: "forge:nbt",
          item: "productivebees:configurable_honeycomb",
          nbt: {
            EntityTag: {
              type: beetype
            }
          }
        },
        outputs: output,
        conditions: [
        {
          type: "forge:mod_loaded",
          modid: modid
        },
        {
          "type": "productivebees:bee_exists",
          "bee": beetype
        }
      ]
      }
    )
    event.addJson(`productivebees/centrifuge/${modname}/honeycomb_${item1.split(":")[1]}`, customProductivebeesCentrifugeRecipeJson)
  }
  // Ender IO
  customProductivebeesCentrifugeRecipes("productivebees:conductive_alloy", 
  [{item: {item: "enderio:conductive_alloy_nugget"}, min: 5, max: 7},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:copper_alloy", 
  [{item: {item: "enderio:copper_alloy_nugget"},min: 6,max: 9},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:end_steel", 
  [{item: {item: "enderio:end_steel_nugget"}, min: 1, max: 3},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:energetic_alloy", 
  [{item: {item: "enderio:energetic_alloy_nugget"}, min: 6, max: 8},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:conductive_alloy", 
  [{item: {item: "enderio:conductive_alloy_nugget"}, min: 5, max: 7},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:infinity", 
  [{item: {item: "enderio:grains_of_infinity"}, chance: 75,},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:pulsating_alloy", 
  [{item: {item: "enderio:pulsating_alloy_nugget"}, min: 1, max: 12},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:redstone_alloy", 
  [{item: {item: "enderio:redstone_alloy_nugget"}, min: 3, max: 8},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  customProductivebeesCentrifugeRecipes("productivebees:soularium", 
  [{item: {item: "enderio:soularium_nugget"}, min: 5, max: 5},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "enderio")
  // Ars Nouveau
  customProductivebeesCentrifugeRecipes("productivebees:arcane", 
  [{item: {tag: "forge:gems/source"}, chance: 50},
  {item: {tag: "forge:wax"}},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}],
  "ars_nouveau")
})