// Botania Mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Defining powah materials
  const botaniamixcentrifugeToRemove = [
    'elementium',
    'manasteel',
    'terrasteel'
  ]; 

  // Removed recipes
  botaniamixcentrifugeToRemove.forEach(mixcentrifugeToRemove =>{
    event.remove({id: `productivebees:create/mixing/botania/honeycomb_${mixcentrifugeToRemove}`})
  })

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:elementium", [
    {item: "botania:elementium_nugget", chance: 0.2},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "botania"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:manasteel", [
    {item: "botania:manasteel_nugget", chance: 0.6},
    {item: "productivebees:wax"},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "botania"}
  ]);
  customMixingCentrifugeRecipes(event, "productivebees:terrasteel", [
    {item: "botania:terrasteel_nugget", chance: 0.3},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "botania"}
  ])
})