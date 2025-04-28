// All recipe modifications to Starbunclemania
// Modified by NightEarl015
ServerEvents.recipes(event => {

  // Removed Recipes
  event.remove({id: 'starbunclemania:fluid/create_honey_to_source'})
  
  // Rewrited Recipes
  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "create"
      }
    ],
    type: "starbunclemania:fluid_sourcelink",
    fluid: "the_bumblezone:honey_fluid_still",
    mb_to_source_ratio: 0.3
  })
})