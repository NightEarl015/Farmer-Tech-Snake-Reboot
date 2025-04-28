// All recipe modifications to Hearth and Harvest
// Modified by NightEarl015

ServerEvents.recipes(event => {
  event.replaceInput(
    { mod: 'hearthandharvest' }, 
    'rusticdelight:coffee_beans',
    'createcafe:coffee_beans'
  )
})