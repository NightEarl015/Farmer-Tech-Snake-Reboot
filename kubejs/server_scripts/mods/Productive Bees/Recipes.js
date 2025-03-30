// All recipe modifications to Productive Bees
// Modified by NightEarl015

ServerEvents.recipes(event => {
  event.replaceOutput(
    {mod: 'productivebees'}, 
    'productivebees:honey',            
    'the_bumblezone:honey_fluid_still'
  )
})