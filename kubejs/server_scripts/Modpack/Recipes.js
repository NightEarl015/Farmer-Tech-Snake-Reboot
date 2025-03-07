// All recipe modifications to Custom Item
// Modified by NightEarl015

ServerEvents.recipes(event => {

    event.shaped(
        Item.of('kubejs:block_industrial_salt', 1), 
        [
          'SSS',
          'SSS', 
          'SSS'
        ],
        {
          S: 'kubejs:industrial_salt'
        }
    ).id('kubejs:storage_blocks/industrial_salt')

    event.custom({
        type: 'thermal:press',
        ingredients: [{item: 'kubejs:industrial_salt', count: 9},{item: 'thermal:press_packing_3x3_die'}],
        result:{ item: 'kubejs:block_industrial_salt'},
        energy: 400,
        conditions: [{type: 'thermal:flag', flag: 'mod_mekanism'}]
    }).id('kubejs:thermal/compat/press_industrial_salt_packing')

    event.custom({
        type: 'thermal:press',
        ingredients: [{item: 'kubejs:block_industrial_salt'},{item: 'thermal:press_unpacking_die'}],
        result:{ item: 'kubejs:industrial_salt', count: 9},
        energy: 400,
        conditions: [{type: 'thermal:flag', flag: 'mod_mekanism'}]
    }).id('kubejs:thermal/compat/press_industrial_salt_unpacking')

    event.shaped(
        Item.of('kubejs:small_wood_gear', 1), 
        [
        'S',
        'SPS', 
        'S'
        ],
        {
            X: 'minecraft:air',
            S: 'minecraft:stone',
            P: "#minecraft:planks"
        }
    ).id('kubejs:small_wood_gear')

    event.shaped(
        Item.of('kubejs:large_wood_gear', 1), 
        [
        'PSP',
        'SPS', 
        'PSP'
        ],
        {
            S: 'minecraft:stone',
            P: "#minecraft:planks"
        }
    ).id('kubejs:large_wood_gear')
})