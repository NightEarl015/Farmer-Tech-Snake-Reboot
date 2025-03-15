// All recipe modifications to Veggies Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'veggiesdelight:roasted_garlic_clove'})
  event.remove({output: 'veggiesdelight:smoked_bellpepper'})
  event.remove({output: 'veggiesdelight:bellpepper_pouch'})
  event.remove({id: 'veggiesdelight:botany/garlic'})
  event.remove({id: 'veggiesdelight:botany/wild_garlic'})
  event.remove({id: 'veggiesdelight:cooking/stuffed_bellpeppers'})


  
  // Rewrited recipes
  event.replaceInput(
    {mod: 'veggiesdelight'}, 
    'veggiesdelight:garlic_clove',            
    'braziliandelight:garlic_clove'
  )
  event.replaceInput(
    {mod: 'veggiesdelight'}, 
    'veggiesdelight:bell_pepper',            
    '#veggiesdelight:bell_pepper'
  )

  event.recipes.farmersdelight.cooking(
    [
      '#veggiesdelight:bell_pepper',
      '#veggiesdelight:bell_pepper',
      '#veggiesdelight:bell_pepper',
      '#forge:vegetables/tomato',
      '#forge:cooked_beef',

    ],
    'veggiesdelight:stuffed_bellpeppers', 
    3, 
    10, 
    'minecraft:bowl', 
  );
  event.smelting('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smelting/roasted_garlic_clove")
  event.smoking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/smoking/roasted_garlic_clove")
  event.campfireCooking('veggiesdelight:roasted_garlic_clove', 'braziliandelight:garlic_clove').id("kubejs:veggiesdelight/campfire/roasted_garlic_clove")
  event.smoking('veggiesdelight:smoked_bellpepper', '#veggiesdelight:bell_pepper').id("kubejs:veggiesdelight/smoking/smoked_bellpepper")
 

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