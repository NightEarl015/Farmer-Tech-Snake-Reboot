// All recipe modifications to Miner's Delight
// Modified by NightEarl015
ServerEvents.recipes(event => {

    const methods = [
        'campfire', 'smoking'
    ]; // Defining methods

    // Removed recipes
    methods.forEach(method => {
        event.remove({id: 'miners_delight:baked_squid'})
        event.remove({id: `miners_delight:baked_squid_${method}`})
    })
})