// Vanilla mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  const vanillaMixcentrifugeToRemove =[
    'bone', 
    'cheese',
    'draconic',
    'ender',
    'flux',
    'fossilised',
    'frosty',
    'ghostly',
    'gregstar',
    'magmatic',
    'obsidian',
    'powdery',
    'prismarine',
    'rotten',
    'sculk',
    'silky',
    'slimy',
    'withered'
  ];
  // Removed recipes
  vanillaMixcentrifugeToRemove.forEach(mixCentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/honeycomb_${mixCentrifugeToRemove}`})
  })
  

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:skeletal", [
    {item: "minecraft:bone_meal", chance: 0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:cheese", [
    {item: "ad_astra:cheese"},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "ad_astra"},
    {type: "productivebees:bee_exists", bee: "productivebees:cheese"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:draconic", [
    {item: "productivebees:draconic_dust", chance:0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:draconic"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:ender", [
    {item: "minecraft:ender_pearl", chance: 0.2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:not", value: {type: "forge:mod_loaded", modid: "integrateddynamics"}}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:flux", [
    {item: "fluxnetworks:flux_dust", chance: 0.5},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "fluxnetworks"},
    {type: "productivebees:bee_exists", bee: "productivebees:flux"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:coal", [
    {item: "minecraft:coal", chance: 0.6},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:frosty", [
    {item: "minecraft:snowball", count: 4},
    {item: "minecraft:ice", chance: 0.4},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:gregstar", [
    {fluid: "the_bumblezone:honey_fluid_still", amount: 500}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:gregstar"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:magmatic", [
    {item: "minecraft:magma_cream", chance: 0.5},
    {item: "minecraft:ice", chance: 0.4},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:obsidian", [
    {item: "minecraft:obsidian", chance: 0.4},
    {item: "minecraft:ice", chance: 0.4},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:prismarine", [
    {item: "minecraft:prismarine_shard", chance: 0.2},
    {item: "minecraft:prismarine_crystals", chance: 0.05},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:zombie", [
    {item: "minecraft:rotten_flesh", chance: 0.6},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:sculk", [
    {item: "minecraft:echo_shard", chance: 0.3},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:sculk"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:silky", [
    {item: "minecraft:string", chance: 0.5},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:silky"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:slimy", [
    {item: "minecraft:slime_ball", chance: 0.2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:slimy"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:withered", [
    {item: "productivebees:wither_skull_chip", chance: 0.30},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:withered"}
  ]);
})