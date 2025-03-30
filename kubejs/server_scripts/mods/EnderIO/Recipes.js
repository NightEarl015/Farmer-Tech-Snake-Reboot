// All recipe modifications to EnderIO
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'enderio:wood_gear'})
  // Rewrited recipes
  event.replaceInput(
    {mod: 'enderio'}, 
    'enderio:wood_gear',            
    'kubejs:large_wood_gear'
  )
})