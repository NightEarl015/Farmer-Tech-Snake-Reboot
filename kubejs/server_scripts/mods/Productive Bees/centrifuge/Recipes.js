// Vanilla centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Vanilla Materials
  const vanillaCentrifugeToRemove = [
    'bone', 
    'draconic',
    'ender',
    'experience',
    'experience_fluid',
    'fossilised',
    'frosty',
    'ghostly',
    'magmatic',
    'obsantian',
    'powdery',
    'sculk',
    'silky',
    'slimy',
    'withered',
    'rotten'
  ]; 

  // Removed recipes
  vanillaCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/honeycomb_${centrifugeToRemove}`})
  })


  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:skeletal", [
    { item: {item: "minecraft:bone_meal"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:draconic", [
    { item: {item: "minecraft:bone_meal"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:draconic"}]);
  customCentrifugeRecipes(event, "productivebees:ender", [
    { item: {item: "minecraft:ender_pearl"}, chance: 20},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "integrateddynamics:liquid_chorus"}, amount: 50}
  ], [{type: "forge:mod_loaded", modid: "integrateddynamics"}]);
  customCentrifugeRecipes(event, "productivebees:coal", [
    { item: {item: "minecraft:coal"}, chance: 60},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:experience", [
    { item: {item: "minecraft:experience_bottle"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 0}
  ], [{type: "productivebees:fluid_tag_empty", tag: "forge:experience"}]);
  customCentrifugeRecipes(event, "productivebees:frosty", [
    { item: {item: "minecraft:snowball"}, min: 2, max: 4},
    { item: {item: "minecraft:ice"}, chance: 40},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:ghostly", [
    { item: {item: "minecraft:ghast_tear"}, chance: 5},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:magmatic", [
    { item: {item: "minecraft:magma_cream"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:obsidian", [
    { item: {item: "minecraft:obsidian"}, chance: 40},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:tag_empty", tag: "forge:dusts/obsidian"}]);
  customCentrifugeRecipes(event, "productivebees:powdery", [
    { item: {item: "minecraft:gunpowder"}, chance: 50},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:sculk", [
    { item: {item: "minecraft:echo_shard"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:sculk"}]);
  customCentrifugeRecipes(event, "productivebees:silky", [
    { item: {item: "minecraft:string"}, chance: 50},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:silky"}]);
  customCentrifugeRecipes(event, "productivebees:slimy", [
    { item: {item: "minecraft:slime_ball"}, chance: 20},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:slimy"}]);
  customCentrifugeRecipes(event, "productivebees:withered", [
    { item: {tag: "forge:fragments/wither_skull"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:withered"}]);
  customCentrifugeRecipes(event, "productivebees:zombie", [
    { item: {item: "minecraft:rotten_flesh"}, chance: 60},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ]);
})