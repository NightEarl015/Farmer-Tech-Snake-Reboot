// All recipe modifications to Unusual Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({id: 'unusual_delight:saltbagrecp'})
    
    // Rewrited recipes
    // Salt Bag
    event.shaped(
        Item.of('unusual_delight:salt_bag', 1),
        [
            'SSS',
            'SSS', 
            'SSS'
        ],
        {
            S: 'salt:salt'
        }
    ).id('kubejs:unusual_delight/saltbagrecp')
    
    event.replaceInput(
        { input: 'unusual_delight:salt' }, 
        'unusual_delight:salt',            
        'salt:salt'         
    )
})