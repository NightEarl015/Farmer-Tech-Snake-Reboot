// All recipe modifications to Ocean's Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'oceansdelight:cutting/tentacles'})
  event.remove({id: 'oceansdelight:cutting/tentacles_using_deployer'})

  // Rewrited recipes
  event.replaceInput(
    {mod: 'oceansdelight'}, 
    'oceansdelight:tentacles',            
    '#crabbersdelight:raw_squid'
  )

  event.recipes.farmersdelight.cutting(
    '#crabbersdelight:raw_squid',
    '#farmersdelight:tools/knives', 
    [ 
      'oceansdelight:cut_tentacles',
    ],
  ).id('kubejs:oceansdelight/cutting/tentacles')

})