// All recipe modifications to Veggies Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'veggiesdelight:roasted_garlic_clove'})
  event.remove({id: 'veggiesdelight:botany/garlic'})
  event.remove({id: 'veggiesdelight:botany/wild_garlic'})

  
  // Rewrited recipes
  event.replaceInput(
    {mod: 'veggiesdelight'}, 
    'veggiesdelight:garlic_clove',            
    'braziliandelight:garlic_clove'
  )

  event.smelting('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smelting/roasted_garlic_clove")
  event.smoking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smoking/roasted_garlic_clove")
  event.campfireCooking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/campfire/roasted_garlic_clove")

  event.recipes.botanypots.crop(
    "veggiesdelight:garlic_seeds", 
    ["dirt"], 
    { block: "veggiesdelight:garlic_crop" }, 
    [
      Item.of ("braziliandelight:garlic_bulb")   
        .withChance(100) 
        .withRolls(1, 2),
      
      Item.of ("braziliandelight:garlic_bulb") 
        .withChance(50) 
        .withRolls(1, 2),
        
      Item.of ("veggiesdelight:garlic_seeds") 
        .withChance(50) 
        .withRolls(1, 2)       
    ],
    1200, 
    1,
  ).id('kubejs:veggiesdelight/botany/garlic')
  event.recipes.botanypots.crop(
    "veggiesdelight:wild_garlic", 
    ["dirt"], 
    { block: "veggiesdelight:wild_garlic" }, 
    [
      Item.of ("braziliandelight:garlic_bulb")   
        .withChance(100) 
        .withRolls(1, 2), 
    ],
    1200, 
    1,  
  ).id('kubejs:veggiesdelight/botany/wild_garlic')
})