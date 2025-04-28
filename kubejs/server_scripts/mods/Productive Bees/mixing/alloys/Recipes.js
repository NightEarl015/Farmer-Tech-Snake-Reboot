// Alloys mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining Alloys
  const alloysMixcentrifugeToRemove =[
    'brazen',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'invar',
    'lumium',
    'signalum',
    'steel'
  ];
  // Removed recipes
  alloysMixcentrifugeToRemove.forEach(mixCentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/alloys/honeycomb_${mixCentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:brass", [
    {item: "alltheores:brass_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:bronze", [
    {item: "alltheores:bronze_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:constantan", [
    {item: "alltheores:constantan_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:electrum", [
    {item: "alltheores:electrum_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:enderium", [
    {item: "alltheores:enderium_ingot", chance: 0.3},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:invar", [
    {item: "alltheores:invar_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:lumium", [
    {item: "alltheores:lumium_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:signalum", [
    {item: "alltheores:signalum_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:steel", [
    {item: "alltheores:steel_ingot", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "alltheores"}
  ]);
})