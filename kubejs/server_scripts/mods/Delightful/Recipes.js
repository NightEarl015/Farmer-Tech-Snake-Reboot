// All recipe modifications to Delightful
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed Recipes
  event.remove({id: 'delightful:knives/smithing/resonarium_knife'})
  
  // Rewrited Recipes
  event.smithing(
  'delightful:resonarium_knife', 
  'deeperdarker:resonarium_plate', 
  'farmersdelight:diamond_knife'
  ).id('delightful:knives/smithing/resonarium_knife')
})