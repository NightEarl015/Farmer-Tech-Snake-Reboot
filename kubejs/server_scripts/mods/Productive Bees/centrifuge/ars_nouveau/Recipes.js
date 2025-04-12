// Ars Nouveau centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: `productivebees:centrifuge/ars_nouveau/honeycomb_arcane`})

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:arcane", [
    {item: {tag: "forge:gems/source"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded", modid: "ars_nouveau"}])
})