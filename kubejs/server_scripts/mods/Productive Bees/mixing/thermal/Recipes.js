// Thermal Mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  const thermalMixingToRemove =[
    'apatite',
    'cinnabar',
    'ruby',
    'sapphire'

  ];
  // Removed recipes
  thermalMixingToRemove.forEach(mixingToRemove =>{
    event.remove({id: `productivebees:create/mixing/thermal/honeycomb_${mixingToRemove}`})
  })
  

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:apatite", [
    {item: "thermal:apatite"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:cinnabar", [
    {item: "thermal:cinnabar"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:ruby", [
    {item: "alltheores:ruby"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:sapphire", [
    {item: "alltheores:sapphire"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
})