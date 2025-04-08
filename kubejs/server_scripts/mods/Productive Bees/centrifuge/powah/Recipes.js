// Powah recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining powahMaterials
  const powahMaterialsToRemove = [
    'blazing_crystal', 
    'energized_steel',
    'niotic_crystal',
    'nitro_crystal',
    'spirited_crystal',
    'uraninite'
  ]; 

  // Removed recipes
  powahMaterialsToRemove.forEach(MaterialsToRemove =>{
    event.remove({id: `productivebees:centrifuge/powah/honeycomb_${MaterialsToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:blazing_crystal", [
    { item: {item: "powah:crystal_blazing"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
  customCentrifugeRecipes(event, "productivebees:energized_steel", [
    { item: {item: "powah:steel_energized"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
  customCentrifugeRecipes(event, "productivebees:niotic_crystal", [
    { item: {item: "powah:crystal_niotic"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
  customCentrifugeRecipes(event, "productivebees:nitro_crystal", [
    { item: {item: "powah:crystal_nitro"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
  customCentrifugeRecipes(event, "productivebees:spirited_crystal", [
    { item: {item: "powah:crystal_spirited"}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
  customCentrifugeRecipes(event, "productivebees:uraninite", [
    { item: {item: "powah:uraninite_raw", chance: 70}},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded",modid: "powah"}]);
})