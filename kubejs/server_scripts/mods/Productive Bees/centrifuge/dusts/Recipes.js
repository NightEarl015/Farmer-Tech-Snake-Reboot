// Dusts centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining dusts
  const dustsCentrifugeToRemove = [
    'blazing',
    'glowing',
    'niter',
    'redstone', 
    'saltpeter',
    'salty',
    'sulfur'
  ]; 

  // Removed recipes
  dustsCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/dusts/honeycomb_${centrifugeToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:blazing", [
    { item: {item: "minecraft:blaze_powder"}, chance: 30},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:glowing", [
    { item: {tag: "forge:dusts/glowstone"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:redstone", [
    { item: {tag: "forge:dusts/redstone"}, min: 1, max: 2, chance: 50},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:niter", [
    { item: {tag: "forge:dusts/saltpeter"}, chance: 40},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:dusts/saltpeter"}},
    {type: "forge:tag_empty", tag: "forge:dusts/niter"}]);
  customCentrifugeRecipes(event, "productivebees:salty", [
    { item: {tag: "forge:salts"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:salty"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:salts"}}]);
  customCentrifugeRecipes(event, "productivebees:sulfur", [
    { item: {tag: "forge:sulfur"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:dusts/sulfur"}}]);
})