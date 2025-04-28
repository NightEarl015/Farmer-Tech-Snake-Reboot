// All recipe modifications to Farmer's Respite
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed Recipes
  event.remove({output: 'farmersrespite:coffee_beans_sack'})
  event.remove({id: 'farmersrespite:brewing/coffee_from_water'})

  // Rewrited Recipes
  event.replaceInput(
    { mod: 'farmersrespite' }, 
    'farmersrespite:coffee_beans',
    'createcafe:roasted_coffee_beans'
  )
})