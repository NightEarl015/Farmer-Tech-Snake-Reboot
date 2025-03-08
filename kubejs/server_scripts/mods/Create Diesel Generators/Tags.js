// All tag modifications to Create Diesel Generators
// Modified by NightEarl015

ServerEvents.tags('fluid', event => {
    event.remove('createdieselgenerators:pumpjack_output', 'createdieselgenerators:crude_oil')
    event.add('createdieselgenerators:pumpjack_output', 'thermal:crude_oil')
})
