// All recipe modifications to Mystic Agriculture
// Modified by NightEarl015

ServerEvents.recipes(event => {

    // Removed recipes
    const types = [
        'apple', 'coal', 'essence', 'sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'watering_can', 'bow', 'crossbow', 'shears', 'fishing_rod', 'scythe', 'helmet', 'chestplate', 'leggings', 'boots', 'paxel', 'farmland'
    ]; // Defining types
    types.forEach(type => {
        event.remove({output: `mysticalagriculture:inferium_${type}`})
        event.remove({output: `mysticalagriculture:prudentium__${type}`})
        event.remove({output: `mysticalagriculture:tertium_${type}`})
        event.remove({output: `mysticalagriculture:supremium_${type}`})
        event.remove({output: `mysticalagriculture:imperium_${type}`})
        event.remove({output: `mysticalagradditions:insanium_${type}`})
    });


    
    // Rewrite recipes

    // Unique recipes
    // Infusion Crystal
    event.shaped(
        Item.of('mysticalagriculture:infusion_crystal', 1),
        [
            'IPI',
            'POP', 
            'IPI'
        ],
        {
            I: 'mysticalagriculture:inferium_essence',
            P: 'mysticalagriculture:prosperity_shard',
            O: 'alltheores:sapphire'
        }
    ).id('kubejs:mysticalagriculture/infusion_crystal')


    // Master Infusion Crystal
    event.shaped(
        Item.of('mysticalagriculture:master_infusion_crystal', 1),
        [
            'IPI',
            'POP', 
            'IPI'
        ],
        {
            I: 'mysticalagriculture:supremium_essence',
            P: 'mysticalagriculture:prosperity_shard',
            O: 'mysticalagriculture:infusion_crystal'
        }
    ).id('kubejs:mysticalagriculture/master_infusion_crystal')
    

    // Mystical Fertilizer
    event.shaped(
        Item.of('mysticalagriculture:mystical_fertilizer', 1),
        [
            'IPI',
            'PIP', 
            'IPI'
        ],
        {
            I: 'mysticalagriculture:fertilized_essence',
            P: 'mysticalagriculture:prosperity_shard',

        }
    ).id('kubejs:mysticalagriculture/mystical_fertilizer')
      

    // Mystical Agriculture Guide
    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
        [
            'mysticalagriculture:inferium_essence',
            'minecraft:book'
        ],
    ).id('kubejs:mysticalagriculture/guide')
  

    //Prudentium Essence Uncraft
    event.shapeless(
        Item.of('mysticalagriculture:inferium_essence', 8),
        [
        'mysticalagriculture:prudentium_essence'
        ]
    ).id('kubejs:mysticalagriculture/prudentium_essence_uncraft')


    //Insanium Essence Uncraft
    event.shapeless(
        Item.of('mysticalagriculture:supremium_essence', 8),
        [
        'mysticalagradditions:insanium_essence'
        ]
    ).id('kubejs:mysticalagriculture/insanium_essence_uncraft')



    // Similar recipes
    // Essence Conversion
    function infusion(output, essence){
        event.shaped(output, [
            'OOO',
            'OIO',
            'OOO'
        ], {
            I: 'mysticalagriculture:infusion_crystal',
            O: essence
        })
    }
    infusion('mysticalagriculture:prudentium_essence', 'mysticalagriculture:inferium_essence')
    infusion('mysticalagriculture:tertium_essence', 'mysticalagriculture:prudentium_essence')
    infusion('mysticalagriculture:imperium_essence', 'mysticalagriculture:tertium_essence')
    infusion('mysticalagriculture:supremium_essence', 'mysticalagriculture:supremium_essence')
    infusion('mysticalagradditions:insanium_essence', 'mysticalagriculture:imperium_essence')

    // Farmland of Essence
    function farmland(output, essence){
        event.shaped(output, [
            'OOO',
            'OIO',
            'OOO'
        ], {
            I: 'minecraft:farmland',
            O: essence
        })
    }
    farmland('mysticalagriculture:inferium_farmland', 'mysticalagriculture:inferium_essence')
    farmland('mysticalagriculture:prudentium_farmland', 'mysticalagriculture:prudentium_essence')
    farmland('mysticalagriculture:tertium_farmland', 'mysticalagriculture:tertium_essence')
    farmland('mysticalagriculture:supremium_farmland', 'mysticalagriculture:supremium_essence')
    farmland('mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_essence')

    // Block of Essence
    function block(output, essence){
        event.shaped(output, [
            'OOO',
            'OOO',
            'OOO'
        ], {
            O: essence
        })
    }
    block('mysticalagriculture:inferium_block', 'mysticalagriculture:inferium_essence')
    block('mysticalagriculture:prudentium_block', 'mysticalagriculture:prudentium_essence')
    block('mysticalagriculture:tertium_block', 'mysticalagriculture:tertium_essence')
    block('mysticalagriculture:supremium_block', 'mysticalagriculture:supremium_essence')
    block('mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_essence')
})
