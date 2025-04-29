// All recipe modifications to Rustic Delight
// Modified by NightEarl015
ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'rusticdelight:brewing/coffee'})
  event.remove({id: 'rusticdelight:coffee'})

  // Rewrited recipes
  event.shapeless('rusticdelight:bell_pepper_seeds',
    [
      '#veggiesdelight:bell_pepper'
    ]
  ).id('kubejs:rusticdelight/seeds/bell_pepper')

  event.replaceInput(
    {mod: 'rusticdelight'}, 
    'rusticdelight:coffee_beans',
    'createcafe:coffee_beans'
  )
  event.replaceInput(
    {mod: 'rusticdelight'}, 
    'rusticdelight:roasted_coffee_beans',
    'createcafe:roasted_coffee_beans'
  )

  event.replaceInput(
    {mod: 'rusticdelight'}, 
    'rusticdelight:coffee',
    'farmersrespite:coffee'
  )

  event.replaceOutput(
    {mod: 'rusticdelight'}, 
    'rusticdelight:roasted_coffee_beans',
    'createcafe:roasted_coffee_beans'
  )
})