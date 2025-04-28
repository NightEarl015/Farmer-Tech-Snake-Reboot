// Mekanism centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Mekanism Materials
  const mekanismCentrifugeToRemove = [
    'refined_glowstone', 
    'refined_obsidian'
  ]; 

  // Removed recipes
  mekanismCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/mekanism/honeycomb_${centrifugeToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:refined_glowstone", [
    { item: {tag: "forge:nuggets/refined_glowstone", min: 1, max: 4}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/refined_glowstone"}},
    {type: "forge:mod_loaded", modid: "mekanism"}]);
  customCentrifugeRecipes(event, "productivebees:refined_obsidian", [
    { item: {tag: "forge:nuggets/refined_obsidian", chance: 30}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/refined_obsidian"}},
    {type: "forge:mod_loaded", modid: "mekanism"}]);
})