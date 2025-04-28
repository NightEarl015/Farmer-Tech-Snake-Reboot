// Thermal Endergy centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining thermalendergyMaterials
  const thermalendergyCentrifugeToRemove = [
    'melodium',
    'prismalium',
    'stellarium'
  ];

  // Removed recipes
  thermalendergyCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/thermalendergy/honeycomb_${centrifugeToRemove}`})
  })

  customCentrifugeRecipes(event, "productivebees:melodium", [
    {item: {item: "thermalendergy:melodium_dust"}, chance: 50},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], [{type: "forge:mod_loaded", modid: "thermalendergy"},
    {type: "productivebees:bee_exists", bee: "productivebees:melodium"}]);
  customCentrifugeRecipes(event, "productivebees:prismalium", [
    {item: {item: "thermalendergy:prismalium_dust"}, chance: 75},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], [{type: "forge:mod_loaded", modid: "thermalendergy"},
    {type: "productivebees:bee_exists", bee: "productivebees:prismalium"}]);
  customCentrifugeRecipes(event, "productivebees:stellarium", [
    {item: {item: "thermalendergy:stellarium_dust"}, chance: 50},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], [{type: "forge:mod_loaded", modid: "thermalendergy"},
    {type: "productivebees:bee_exists", bee: "productivebees:stellarium"}])
})