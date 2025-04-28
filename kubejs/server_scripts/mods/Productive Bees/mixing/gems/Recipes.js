// Gems mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining Gems
  const gemsMixcentrifugeToRemove =[
    'amethyst',
    'crystalline',
    'diamond',
    'emerald',
    'lapis',
    'quartz',
    'rose_quartz'
  ];
  // Removed recipes
  gemsMixcentrifugeToRemove.forEach(mixCentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/gems/honeycomb_${mixCentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:amethyst", [
    {item: "minecraft:amethyst_shard", chance: 0.3},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:amethyst"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:diamond", [
    {item: "minecraft:diamond", chance: 0.3},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:diamond"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:emerald", [
    {item: "minecraft:emerald", chance: 0.3},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:emerald"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:lapis", [
    {item: "minecraft:lapis_lazuli", count: 2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:lapis"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:crystalline", [
    {item: "minecraft:quartz", count: 2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:crystalline"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:rose_quartz", [
    {item: "create:rose_quartz", chance: 0.5},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:rose_quartz"}
  ]);
})