// Ars Nouveau centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: `productivebees:centrifuge/ars_nouveau/honeycomb_arcane`})

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:arcane", [
  {item: {item: "ars_nouveau:source_gem"}, chance: 0.5},
  {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "heated", [{type: "forge:mod_loaded", modid: "create"},
  {type: "forge:mod_loaded", modid: "ars_nouveau"}
  ])
})