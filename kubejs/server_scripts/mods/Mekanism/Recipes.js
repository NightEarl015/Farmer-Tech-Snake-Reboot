// All recipe modifications to Mekanism
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes

    event.replaceInput(
        { input: 'mekanism:salt' }, 
        'mekanism:salt',            
        '#mekanism:industrial_salt'         
    )
})