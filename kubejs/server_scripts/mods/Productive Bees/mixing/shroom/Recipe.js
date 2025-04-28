// Shrooms mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 


ServerEvents.recipes(event => {
  // Defining Shrooms
  const shroomsMixcentrifugeToRemove =[
    'brown_shroom',
    'crimson',
    'red_shroom',
    'warped'
  ];
  // Removed recipes
  shroomsMixcentrifugeToRemove.forEach(mixCentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/shroom/honeycomb_${mixCentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:brown_shroom", [
    {item: "minecraft:brown_mushroom", chance: 0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:crimson", [
    {item: "minecraft:crimson_fungus", chance: 0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:red_shroom", [
    {item: "minecraft:red_mushroom", chance: 0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:warped", [
    {item: "minecraft:warped_fungus", chance: 0.7},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"}
  ])
})