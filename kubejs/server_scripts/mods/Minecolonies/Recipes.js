// All recipe modifications to Minecolonies
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Rewrited Recipes
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:tomato',            
    '#forge:crops/tomato'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:soybean',            
    'sushigocrafting:soy_bean'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:garlic',            
    'braziliandelight:garlic_bulb'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:onion',            
    'farmersdelight:onion'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:corn',            
    'culturaldelights:corn_cob'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:eggplant',            
    'culturaldelights:eggplant'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:nether_pepper',            
    'mynethersdelight:bullet_pepper'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:rice',            
    'farmersdelight:rice'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:bell_pepper',            
    '#forge:crops/bell_pepper'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:cabbage',            
    '#forge:crops/cabbage'
  )
  event.replaceInput(
    {mod: 'minecolonies'}, 
    'minecolonies:chickpea',            
    '#forge:crops/chickpea'
  )
})