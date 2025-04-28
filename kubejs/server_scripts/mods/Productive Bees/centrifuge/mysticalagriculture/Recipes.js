// Mystical Agriculture centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Removed recipes
  event.remove({id: 'productivebees:centrifuge/mysticalagriculture/honeycomb_soulium'})

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:soulium", [
    { item: {item: "mysticalagriculture:soulium_dust"}, chance:50},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded", modid: "mysticalagriculture"}])
})