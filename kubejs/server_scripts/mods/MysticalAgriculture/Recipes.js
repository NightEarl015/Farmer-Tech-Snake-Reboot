// All recipe modifications to Mystic Agriculture
// Modified by NightEarl015

ServerEvents.recipes(event => {

    // Removed recipes
    const types = [
        'apple', 'coal', 'essence', 'sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'watering_can', 'bow', 'crossbow', 'shears', 'fishing_rod', 'scythe', 'sickle', 'helmet', 'chestplate', 'leggings', 'boots', 'paxel', 'farmland'
    ]; // Defining types

    const levels = [
        'inferium', 'prudentium', 'tertium', 'supremium', 'imperium'
    ]; // Defining levels
    types.forEach(type => {
        levels.forEach(level => {
            event.remove({output: `mysticalagriculture:${level}_${type}`})
            event.remove({output: `mysticalagradditions:insanium_${type}`})// Remove Essence kit
        });
    });

    const materials = [
        'invar', 'iridium', 'lead', 'nickel', 'niter', 'platinum', 'silver', 'fluix', 'certus_quartz', 'steel', 'tin', 'titanium', 'uranium', 'zinc', 'aluminum', 'brass', 'bronze', 'constantan', 'electrum'
    ]; // Defining materials
    materials.forEach(material => {
        event.remove({id: `mysticalagriculture:essence/common/${material}_ingot`})
        event.remove({id: `mysticalagriculture:essence/appliedenergistics2/${material}_dust`})  
    });
    
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/silicon"})
    event.remove({id: "mysticalagriculture:essence/common/sulfur"})
    event.remove({output: 'mysticalagriculture:mystical_fertilizer'})



    // Rewrited recipes

    // Unique recipes
    // Infusion Crystal
    event.shaped('mysticalagriculture:infusion_crystal',
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
    event.shaped('mysticalagriculture:master_infusion_crystal',
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
    event.shaped('mysticalagriculture:mystical_fertilizer',
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
    event.shapeless('8x mysticalagriculture:inferium_essence',
        [
        'mysticalagriculture:prudentium_essence'
        ]
    ).id('kubejs:mysticalagriculture/prudentium_essence_uncraft')


    //Insanium Essence Uncraft
    event.shapeless('8x mysticalagriculture:supremium_essence',
        [
        'mysticalagradditions:insanium_essence'
        ]
    ).id('kubejs:mysticalagriculture/insanium_essence_uncraft')

    // Infusion Pedestal 
    event.replaceInput(
        { output: 'mysticalagriculture:infusion_pedestal' }, 
        'minecraft:stone',            
        'botania:livingrock'         
    )

    //Infusion Altar 
    event.replaceInput(
        { output: 'mysticalagriculture:infusion_altar' }, 
        'minecraft:stone',            
        'botania:livingrock'         
    )
      





    // Similar recipes
    // Essence Conversion
    function infusion(highessence, lowessence){
        event.shaped(highessence, [
            'OOO',
            'OIO',
            'OOO'
        ], {
            I: 'mysticalagriculture:infusion_crystal',
            O: lowessence
        })
    }
    infusion('mysticalagriculture:prudentium_essence', 'mysticalagriculture:inferium_essence')
    infusion('mysticalagriculture:tertium_essence', 'mysticalagriculture:prudentium_essence')
    infusion('mysticalagriculture:imperium_essence', 'mysticalagriculture:tertium_essence')
    infusion('mysticalagriculture:supremium_essence', 'mysticalagriculture:supremium_essence')
    infusion('mysticalagradditions:insanium_essence', 'mysticalagriculture:imperium_essence')

    // Farmland of Essence
    function farmland(farmland, essence){
        event.shaped(farmland, [
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
    function block(block, essence){
        event.shaped(block, [
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

    // Essence Polymerization #1
    function poly1(output, essence){
        event.shaped(output, [
            'OOO'
        ], {
            O: essence
        })
    }
    poly1("2x #forge:silicon", 'mysticalagriculture:silicon_essence')
    poly1("3x #forge:dusts/sulfur", 'mysticalagriculture:sulfur_essence')

    // Essence Polymerization #2
    function poly2(output, essence){
        event.shaped(output, [
            'OOO',
            'O O',
            'OOO'
        ], {
            O: essence
        })
    }
    poly2('3x ae2:certus_quartz_crystal', 'mysticalagriculture:certus_quartz_essence')
    poly2('3x ae2:fluix_crystal', 'mysticalagriculture:fluix_essence')
    poly2('4x ae2:sky_stone_block', 'mysticalagriculture:sky_stone_essence') //Applied Energistics 2
    poly2("3x #forge:raw_materials/lead", 'mysticalagriculture:lead_essence')
    poly2("2x #forge:raw_materials/silver", 'mysticalagriculture:silver_essence')
    poly2("2x #forge:dusts/steel", 'mysticalagriculture:steel_essence')
    poly2("2x #forge:raw_materials/uranium", 'mysticalagriculture:uranium_essence')
    poly2("2x #forge:raw_materials/zinc", 'mysticalagriculture:zinc_essence')
    poly2("2x #forge:raw_materials/tin", 'mysticalagriculture:tin_essence')
    poly2("2x #forge:dusts/brass", 'mysticalagriculture:brass_essence')
    poly2("2x #forge:dusts/bronze", 'mysticalagriculture:bronze_essence')
    poly2("2x #forge:dusts/electrum", 'mysticalagriculture:electrum_essence')
    poly2("2x #forge:raw_materials/aluminum", 'mysticalagriculture:aluminum_essence') //All the ores
    poly2("2x #forge:raw_materials/copper", 'mysticalagriculture:copper_essence')
    poly2("2x #forge:raw_materials/iron", 'mysticalagriculture:iron_essence')
    poly2("2x #forge:raw_materials/gold", 'mysticalagriculture:gold_essence')
    poly2('mekanism:dust_netherite', 'mysticalagriculture:netherite_essence') 
    poly2('6x minecraft:quartz', 'mysticalagriculture:nether_quartz_essence')
    poly2('10x minecraft:amethyst_shard', 'mysticalagriculture:amethyst_essence') //Minecraft
})
// Disabled Ores
/*
    poly2("2x #forge:dusts/constantan", 'mysticalagriculture:constantan_essence')
    poly2("3x #forge:raw_materials/platinum", 'mysticalagriculture:platinum_essence')
    poly2("3x #forge:raw_materials/nickel", 'mysticalagriculture:nickel_essence')
    poly2("2x #forge:raw_materials/iridium", 'mysticalagriculture:iridium_essence')
    poly2("2x #forge:dusts/invar", 'mysticalagriculture:invar_essence') 
*/     

// Disabled IDs
/*
.id('kubejs:mysticalagriculture/essence/appliedenergistics/certus_quartz')
.id('kubejs:mysticalagriculture/essence/appliedenergistics/fluix') 
.id(`kubejs:mysticalagriculture/${rawmaterial}`)
.id(`kubejs:mysticalagriculture/${materialdust}`)
*/   

