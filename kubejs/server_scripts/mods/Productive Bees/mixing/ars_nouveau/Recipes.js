// Ars Nouveau Mixing centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: `productivebees:create/mixing/ars_nouveau/honeycomb_arcane`})

  // Rewrited recipes
  customMixingCentrifugeRecipes(event, "productivebees:arcane", [
    {item: "ars_nouveau:source_gem", chance: 0.5},
    {fluid: "the_bumblezone:honey_fluid_still", amount: 50}
    ], "heated", [{type: "forge:mod_loaded", modid: "create"},
    {type: "forge:mod_loaded", modid: "ars_nouveau"}
  ]);
})