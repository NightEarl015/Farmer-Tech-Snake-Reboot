// All recipe modifications to Veggies Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'veggiesdelight:roasted_garlic_clove'})
  
  // Rewrited recipes
  event.replaceInput(
    {mod: 'veggiesdelight'}, 
    'veggiesdelight:garlic_clove',            
    'braziliandelight:garlic_clove'
  )

  event.smelting('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smelting/roasted_garlic_clove")
  event.smoking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smoking/roasted_garlic_clove")
  event.campfireCooking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/campfire/roasted_garlic_clove")
})