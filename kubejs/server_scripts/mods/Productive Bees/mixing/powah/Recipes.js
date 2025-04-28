// Powah Mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining powah materials
  const powahmixcentrifugeToRemove = [
    'blazing_crystal',
    'energized_steel',
    'niotic_crystal',
    'nitro_crystal',
    'spirited_crystal',
    'uraninite'
  ]; 

  // Removed recipes
  powahmixcentrifugeToRemove.forEach(mixcentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/powah/honeycomb_${mixcentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:blazing_crystal", [
    {item: "powah:crystal_blazing"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:energized_steel", [
    {item: "powah:energized_steel"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:nitro_crystal", [
    {item: "powah:crystal_nitro"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:niotic_crystal", [
    {item: "powah:niotic_crystal"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:spirited_crystal", [
    {item: "powah:crystal_spirited"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:uraninite", [
    {item: "powah:uraninite_raw", chance: 0.7},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "powah"}
  ])
})