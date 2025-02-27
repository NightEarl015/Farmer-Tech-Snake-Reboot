// All recipe modifications to The Salt
// Modified by NightEarl015

ServerEvents.recipes(event => {
    /*
    const modnames = [
        'createfood', 'braziliandelight'
    ]; // Defining modnames
    modnames.forEach(modname => {
        event.replaceInput(
            { mod: 'braziliandelight' }, 
            '#forge:salt',            
            'salt:salt'         
        )
    }); 
    */
    event.replaceInput(
        { mod: 'braziliandelight' }, 
        '#forge:salt',            
        'salt:salt' 
    ) 
})
