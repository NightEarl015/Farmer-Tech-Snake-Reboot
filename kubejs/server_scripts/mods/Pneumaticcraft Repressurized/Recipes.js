// All recipe modifications to Pneumaticcraft Repressurized
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'pneumaticcraft:plastic'})  
  
  // Rewrited recipes
  event.replaceInput(
    {mod: 'pneumaticcraft'}, 
    'pneumaticcraft:plastic',            
    'industrialforegoing:plastic'
  )

  event.replaceOutput(
    {mod: 'pneumaticcraft'}, 
    'pneumaticcraft:plastic',            
    'industrialforegoing:plastic'
  )
})