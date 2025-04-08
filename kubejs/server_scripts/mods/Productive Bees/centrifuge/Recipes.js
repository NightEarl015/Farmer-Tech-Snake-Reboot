// Centrifuge modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining vanillaMaterials
  const vanillaMaterialsToRemove = [
    'bone', 
    'draconic',
    'ender_integrateddynamics',
    'fossilised',
    'frosty',
    'ghostly',
    'rotten'
  ]; 

  // Removed recipes
  vanillaMaterialsToRemove.forEach(MaterialsToRemove =>{
    event.remove({id: `productivebees:centrifuge/honeycomb_${MaterialsToRemove}`})
  })


  // Rewrited recipes
  vanillasCentrifugeRecipes(event, "productivebees:skeletal", [
    { item: {item: "minecraft:bone_meal"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:skeletal", [
    { item: {item: "minecraft:bone_meal"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:draconic", [
    { item: {item: "minecraft:bone_meal"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  modsCentrifugeRecipes(event, "productivebees:ender", [
    { item: {item: "minecraft:ender_pearl"}, chance: 20},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "integrateddynamics:liquid_chorus"}, amount: 50}
  ], "integrateddynamics");
  vanillasCentrifugeRecipes(event, "productivebees:coal", [
    { item: {item: "minecraft:coal"}, chance: 60},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:frosty", [
    { item: {item: "minecraft:snowball"}, min: 2, max: 4},
    { item: {item: "minecraft:ice"}, chance: 40},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:ghostly", [
    { item: {item: "minecraft:ghast_tear"}, chance: 5},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:magmatic", [
    { item: {item: "minecraft:magma_cream"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
  vanillasCentrifugeRecipes(event, "productivebees:zombie", [
    { item: {item: "minecraft:rotten_flesh"}, chance: 60},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
})