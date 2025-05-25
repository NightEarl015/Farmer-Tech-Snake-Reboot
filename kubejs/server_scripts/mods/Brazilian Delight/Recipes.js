// All recipe modifications to Brazilian Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'braziliandelight:salt_bucket'})  
  event.remove({output: 'braziliandelight:corn_crate'})
  event.remove({output: 'braziliandelight:coffee_seeds'})

  // Rewrited recipes

  event.replaceInput(
    {mod: 'braziliandelight'}, 
    'braziliandelight:corn',            
    'culturaldelights:corn_cob'
  )
'braziliandelight:coffee_beans_bag'
  // Salt Bucket Uncraft
  event.shapeless('salt:salt',
    [
      'braziliandelight:salt_bucket'
    ],
  ).id('braziliandelight:crafting_shapeless/salt_bucket_uncraft')

  // Salt Bucket Blasting
  event.blasting('braziliandelight:salt_bucket', 'kubejs:sea_salt_water_bucket').id('braziliandelight:blasting/salt_bucket_blasting')
  event.smelting('braziliandelight:salt_bucket', 'kubejs:sea_salt_water_bucket').id('braziliandelight:smelting/salt_bucket_smelting')
  event.smoking('braziliandelight:salt_bucket', 'kubejs:sea_salt_water_bucket').id('braziliandelight:smoking/salt_bucket_smoking')

  // Coffee Beans 
  event.shapeless('createcafe:coffee_beans',
    [
      'braziliandelight:coffee_berries'
    ],
  ).id('braziliandelight:coffee_seeds')

  // Coffee beans bag
  event.shaped('braziliandelight:coffee_beans_bag',
    [
      'BBB',
      'BBB', 
      'BBB'
    ],
    {
      B: 'createcafe:coffee_beans',
    }
  ).id('braziliandelight:coffee_beans_bag')

// Coffee beans bag uncraft
  event.shapeless('9x createcafe:coffee_beans',
  [
    'braziliandelight:coffee_beans_bag'
  ],
  ).id('braziliandelight:coffee_beans_bag_uncraft')


  // Corn Cooking
  event.blasting('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('braziliandelight:blasting/cooked_corn_blasting')
  event.smelting('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('braziliandelight:smelting/cooked_corn_smelting')
  event.smoking('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('braziliandelight:smoking/cooked_corn_smoking')
  event.campfireCooking('culturaldelights:corn_cob', 'braziliandelight:cooked_corn').id('braziliandelight:smoking/cooked_corn_campfire_smoking')
})
