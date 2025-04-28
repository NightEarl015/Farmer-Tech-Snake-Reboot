// Raw Materials Mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining raw materials
  const rawmaterialsmixcentrifugeToRemove = [
    'aluminium', 
    'copper',
    'gold',
    'iridium',
    'iron',
    'leaden',
    'netherite',
    'nickel',
    'osmium',
    'radioactive',
    'silver',
    'tin',
    'zinc'
  ]; 

  // Removed recipes
  rawmaterialsmixcentrifugeToRemove.forEach(mixcentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/raw_materials/honeycomb_${mixcentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:aluminum", [
    {item: "alltheores:raw_aluminum", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:copper", [
    {item: "minecraft:raw_copper", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:gold", [
    {item: "minecraft:raw_gold", chance: 0.5},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:iridium", [
    {item: "alltheores:raw_iridium", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:iron", [
    {item: "minecraft:raw_iron", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:lead", [
    {item: "alltheores:raw_lead", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:netherite", [
    {item: "minecraft:netherite_scrap", chance: 0.1},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:nickel", [
    {item: "alltheores:raw_nickel", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:osmium", [
    {item: "alltheores:raw_osmium", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:radioactive", [
    {item: "alltheores:raw_uranium", chance: 0.2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:silver", [
    {item: "alltheores:raw_silver", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:tin", [
    {item: "alltheores:raw_tin", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:zinc", [
    {item: "alltheores:raw_zinc", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  ]);
})