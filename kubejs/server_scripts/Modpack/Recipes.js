// All recipe modifications to Custom Item
// Modified by NightEarl015

ServerEvents.recipes(event => {

    event.shaped('kubejs:block_industrial_salt',
        [
          'SSS',
          'SSS', 
          'SSS'
        ],
        {
          S: 'kubejs:industrial_salt'
        }
    ).id('kubejs:storage_blocks/industrial_salt')

    event.shaped('kubejs:small_wood_gear',
        [
        ' S ',
        'SPS', 
        ' S '
        ],
        {
            S: 'minecraft:stone',
            P: "#minecraft:planks"
        }
    ).id("kubejs:small_wood_gear")

    event.shaped('kubejs:large_wood_gear',
        [
        "PSP",
        "SPS", 
        "PSP"
        ],
        {
            S: 'minecraft:stone',
            P: "#minecraft:planks"
        }
    ).id("kubejs:large_wood_gear")
})