// Shroom centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining shrooms
  const shroomsCentrifugeToRemove = [
    'brown_shroom',
    'crimson',
    'red_shroom',
    'warped'
  ];

  // Removed recipes
  shroomsCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/shroom/honeycomb_${centrifugeToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:brown_shroom", [
    { item: {item: "minecraft:brown_mushroom"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:crimson", [
    { item: {item: "minecraft:crimson_fungus"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:red_shroom", [
    { item: {item: "minecraft:red_mushroom"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
  customCentrifugeRecipes(event, "productivebees:warped", [
    { item: {item: "minecraft:warped_fungus"}, chance: 70},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], []);
})