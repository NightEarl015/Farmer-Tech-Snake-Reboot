// AE2 recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining ae2Materials
  const ae2MaterialsToRemove = [
    'fluix', 
    'sky_steel',
    'spacial'
  ]; 

  // Removed recipes
  ae2MaterialsToRemove.forEach(MaterialsToRemove =>{
    event.remove({id: `productivebees:centrifuge/ae2/honeycomb_${MaterialsToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:fluix", [
    { item: {item: "ae2:fluix_crystal"}, chance: 20},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "ae2"}]);
  customCentrifugeRecipes(event, "productivebees:sky_steel", [
    { item: {item: "megacells:sky_steel_ingot"}, chance: 25},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:sky_steel"},
    {type: "forge:mod_loaded",modid: "megacells"}]);

  customCentrifugeRecipes(event, "productivebees:spacial", [
    { item: {item: "ae2:certus_quartz_crystal"}, min: 1, max: 2},
    { item: {item: "ae2:certus_quartz_dust"}, chance: 50},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "ae2"}]);
})