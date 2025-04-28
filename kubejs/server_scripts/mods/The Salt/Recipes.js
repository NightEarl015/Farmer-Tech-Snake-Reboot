// All recipe modifications to The Salt
// Modified by NightEarl015

ServerEvents.recipes(event => {
  const modnames = [
    'createfood', 'braziliandelight'
  ]; // Defining modnames
  modnames.forEach(modname => {
    event.replaceInput(
      { mod: `${modname}` }, 
      '#forge:salt',            
      'salt:salt'         
    )
  });    
})
