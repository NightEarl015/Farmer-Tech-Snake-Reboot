// PB Compatible from EnderIO
// Authored by NightEarl015

ServerEvents.recipes(event => {

  // Defining enderioMaterials
  const enderioMaterialsToRemove = [
    'conductive_alloy', 
    'copper_alloy',
    'end_steel',
    'energetic_alloy',
    'pulsating_alloy',
    'redstone_alloy',
    'soularium',
    'vibrant_alloy'
  ]; 

  // Removed recipes
  enderioMaterialsToRemove.forEach(MaterialsToRemove =>{
    event.remove({id: `productivebees:centrifuge/enderio/honeycomb_${MaterialsToRemove}`})
  })
  

  // Rewrited recipes
  modCentrifugeRecipes(event, "productivebees:conductive_alloy", [
    { item: {item: "enderio:conductive_alloy_nugget"}, min: 5, max: 7},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio");
  modCentrifugeRecipes(event, "productivebees:copper_alloy", [
    { item: {item: "enderio:copper_alloy_nugget"}, min: 6, max: 9},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio");
  modCentrifugeRecipes(event, "productivebees:end_steel", [
    { item: {item: "enderio:end_steel_nugget"}, min: 1, max: 3},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio");
  modCentrifugeRecipes(event, "productivebees:energetic_alloy", [
    { item: {item: "enderio:energetic_alloy_nugget"}, min: 6, max: 8},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
  modCentrifugeRecipes(event, "productivebees:infinity", [
    { item: {item: "enderio:grains_of_infinity"}, chance: 75},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
  modCentrifugeRecipes(event, "productivebees:pulsating_alloy", [
    { item: {item: "enderio:pulsating_alloy_nugget"}, min: 1, max: 12},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
  modCentrifugeRecipes(event, "productivebees:redstone_alloy", [
    { item: {item: "enderio:redstone_alloy_nugget"}, min: 3, max: 8},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
  modCentrifugeRecipes(event, "productivebees:soularium", [
    { item: {item: "enderio:soularium_nugget"}, min: 5, max: 5},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
  modCentrifugeRecipes(event, "productivebees:vibrant_alloy", [
    { item: {item: "enderio:vibrant_alloy_nugget"}, min: 5, max: 5},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "enderio")
})