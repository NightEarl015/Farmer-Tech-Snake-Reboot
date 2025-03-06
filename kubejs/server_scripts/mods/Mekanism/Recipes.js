// All recipe modifications to Mekanism
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({id: 'mekanism:gas_conversion/salt_to_hydrogen_chloride'})
    event.remove({id: 'mekanism:oxidizing/brine'})
    event.remove({id: 'mekanism:crystallizing/salt'})
    event.remove({id: 'mekanism:storage_blocks/salt'})
    event.remove({id: 'thermal:compat/mekanism/press_mek_salt_packing'})
    event.remove({id: 'thermal:compat/mekanism/press_mek_salt_unpacking'})
    

    // Rewrited recipes
    event.custom({
        type: 'mekanism:gas_conversion',
        input: { ingredient: {item: 'kubejs:industrial_salt'}},
        output:{ amount: 2, gas: 'mekanism:hydrogen_chloride'}
    }).id('kubejs:mekanism/gas_conversion/salt_to_hydrogen_chloride')

    event.custom({
        type: 'mekanism:oxidizing',
        input: { ingredient: {item: 'kubejs:industrial_salt'}},
        output:{ amount: 15, gas: 'mekanism:brine'}
    }).id('kubejs:mekanism/oxidizing/brine')

    event.custom({
        type: 'mekanism:crystallizing',
        chemicalType: 'gas',
        input: { amount: 15, gas: 'mekanism:brine'},
        output:{ item: 'kubejs:industrial_salt'}
    }).id('kubejs:mekanism/crystallizing/industrial_salt')

})