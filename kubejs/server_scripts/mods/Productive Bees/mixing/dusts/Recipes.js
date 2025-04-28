// Dusts mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining Dusts
  const dustsMixcentrifugeToRemove =[
    'blazing',
    'glowing',
    'niter',
    'redstone',
    'salty',
    'sulfur'
  ];

  // Removed recipes
  dustsMixcentrifugeToRemove.forEach(mixCentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/dusts/honeycomb_${mixCentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:blazing", [
    {item: "minecraft:blaze_powder", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:glowing", [
    {item: "minecraft:glowstone_dust"},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:niter", [
    {item: "thermal:niter", chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:redstone", [
    {item: "minecraft:redstone", count: 2, chance: 0.4},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:salty", [
    {item: "salt:salt"},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "salt"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:sulfur", [
    {item: "thermal:sulfur"},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "thermal"}
  ]);
})