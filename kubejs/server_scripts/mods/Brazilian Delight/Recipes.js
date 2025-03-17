// All recipe modifications to Brazilian Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'braziliandelight:salt_bucket'})  
  event.remove({output: 'braziliandelight:corn_crate'})

  // Rewrited recipes

  event.replaceInput(
    {mod: 'braziliandelight'}, 
    'braziliandelight:corn',            
    'culturaldelights:corn_cob'
  )

  // Salt Bucket Uncraft
  event.shapeless('salt:salt',
    [
        'braziliandelight:salt_bucket'
    ],
  ).id('kubejs:braziliandelight/crafting_shapeless/salt_bucket_uncraft')

  // Salt Bucket Blasting
  event.blasting('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/blasting/salt_bucket_blasting')
  event.smelting('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/smelting/salt_bucket_smelting')
  event.smoking('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/smoking/salt_bucket_smoking')

  // Corn Cooking
  event.blasting('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('kubejs:braziliandelight/blasting/cooked_corn_blasting')
  event.smelting('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('kubejs:braziliandelight/smelting/cooked_corn_smelting')
  event.smoking('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('kubejs:braziliandelight/smoking/cooked_corn_smoking')
  event.campfireCooking('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('kubejs:braziliandelight/smoking/cooked_corn_campfire_smoking')
})
