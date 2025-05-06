// All recipe modifications to Mystic Agriculture
// Modified by NightEarl015

ServerEvents.recipes(event => {

    // Removed recipes
    const types = [
        'apple', 'coal', 'essence', 'sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'watering_can', 'bow', 'crossbow', 'shears', 'fishing_rod', 'scythe', 'sickle', 'helmet', 'chestplate', 'leggings', 'boots', 'paxel', 'farmland'
    ]; // Defining types

    const essencelevels = [
        'inferium', 'prudentium', 'tertium', 'supremium', 'imperium'
    ]; // Defining levels
    types.forEach(type => {
        essencelevels.forEach(level => {
            event.remove({output: `mysticalagriculture:${level}_${type}`})
            event.remove({output: `mysticalagradditions:insanium_${type}`})// Remove Essence kit
        });
    });

    const materials = [
        'invar', 'iridium', 'lead', 'niter', 'platinum', 'silver', 'fluix', 'certus_quartz', 'steel', 'tin', 'titanium', 'uranium', 'zinc', 'aluminum', 'brass', 'bronze', 'constantan', 'electrum'
    ]; // Defining materials
    materials.forEach(material => {
        event.remove({id: `mysticalagriculture:essence/common/${material}_ingot`})
        event.remove({id: `mysticalagriculture:essence/appliedenergistics2/${material}_dust`})  
    });
    
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/silicon"})
    event.remove({id: "mysticalagriculture:essence/common/sulfur"})
    event.remove({output: 'mysticalagriculture:mystical_fertilizer'})
    event.remove({output: 'ae2:sky_stone_block'})



    // Rewrited recipes

    // Unique recipes
    // Infusion Crystal
    event.shaped('mysticalagriculture:infusion_crystal',
        [
            'IPI',
            'PGP', 
            'IPI'
        ],
        {
            I: 'mysticalagriculture:inferium_essence',
            P: 'mysticalagriculture:prosperity_shard',
            G: 'rftoolsbase:infused_diamond'
        }
    ).id('mysticalagriculture:infusion_crystal')


    // Master Infusion Crystal
    event.shaped('mysticalagriculture:master_infusion_crystal',
        [
            'IPI',
            'PCP', 
            'IPI'
        ],
        {
            I: 'mysticalagriculture:supremium_essence',
            P: 'mysticalagriculture:prosperity_shard',
            C: 'mysticalagriculture:infusion_crystal'
        }
    ).id('mysticalagriculture:master_infusion_crystal')
    

    // Mystical Fertilizer
    event.shaped('mysticalagriculture:mystical_fertilizer',
        [
            'FPF',
            'PFP', 
            'FPF'
        ],
        {
            F: 'mysticalagriculture:fertilized_essence',
            P: 'mysticalagriculture:prosperity_shard',

        }
    ).id('mysticalagriculture:mystical_fertilizer')
      

    // Mystical Agriculture Guide
    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
        [
            'mysticalagriculture:inferium_essence',
            'minecraft:book'
        ],
    ).id('mysticalagriculture:guide')
  

    //Prudentium Essence Uncraft
    event.shapeless('8x mysticalagriculture:inferium_essence',
        [
        'mysticalagriculture:prudentium_essence'
        ]
    ).id('mysticalagriculture:prudentium_essence_uncraft')


    //Insanium Essence Uncraft
    event.shapeless('8x mysticalagriculture:supremium_essence',
        [
        'mysticalagradditions:insanium_essence'
        ]
    ).id('mysticalagriculture:insanium_essence_uncraft')

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
    function essenceinfusion(highessence, lowessence){
        event.shaped(highessence, [
            'OOO',
            'OIO',
            'OOO'
        ], {
            I: 'mysticalagriculture:infusion_crystal',
            O: lowessence
        }).id(`mysticalagriculture:${highessence.split(":")[1]}`)
    }
    essenceinfusion('mysticalagriculture:prudentium_essence', 'mysticalagriculture:inferium_essence')
    essenceinfusion('mysticalagriculture:tertium_essence', 'mysticalagriculture:prudentium_essence')
    essenceinfusion('mysticalagriculture:imperium_essence', 'mysticalagriculture:tertium_essence')
    essenceinfusion('mysticalagriculture:supremium_essence', 'mysticalagriculture:supremium_essence')
    essenceinfusion('mysticalagradditions:insanium_essence', 'mysticalagriculture:imperium_essence')

    // Farmland of Essence
    function essencefarmland(essencefarmland, essence){
        event.shaped(essencefarmland, [
            'OOO',
            'OIO',
            'OOO'
        ], {
            I: 'minecraft:farmland',
            O: essence
        }).id(`mysticalagriculture:${essencefarmland.split(":")[1]}`)
    }
    essencefarmland('mysticalagriculture:inferium_farmland', 'mysticalagriculture:inferium_essence')
    essencefarmland('mysticalagriculture:prudentium_farmland', 'mysticalagriculture:prudentium_essence')
    essencefarmland('mysticalagriculture:tertium_farmland', 'mysticalagriculture:tertium_essence')
    essencefarmland('mysticalagriculture:supremium_farmland', 'mysticalagriculture:supremium_essence')
    essencefarmland('mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_essence')

    // Block of Essence
    function essenceblock(essenceblock, essence){
        event.shaped(essenceblock, [
            'OOO',
            'OOO',
            'OOO'
        ], {
            O: essence
        }).id(`mysticalagriculture:${essenceblock.split(":")[1]}`)
    }
    essenceblock('mysticalagriculture:inferium_block', 'mysticalagriculture:inferium_essence')
    essenceblock('mysticalagriculture:prudentium_block', 'mysticalagriculture:prudentium_essence')
    essenceblock('mysticalagriculture:tertium_block', 'mysticalagriculture:tertium_essence')
    essenceblock('mysticalagriculture:supremium_block', 'mysticalagriculture:supremium_essence')
    essenceblock('mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_essence')

    // Essence Polymerization #1
    function poly1(output, essence){
        event.shaped(output, [
            'OOO'
        ], {
            O: essence
        }).id(`mysticalagriculture:poly1/${output.split(":")[1]}`)
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
        }).id(`mysticalagriculture:poly2/${output.split(":")[1]}`)
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
    poly2("2x #forge:dusts/constantan", 'mysticalagriculture:constantan_essence')
    poly2("3x #forge:raw_materials/nickel", 'mysticalagriculture:nickel_essence')
    poly2('mekanism:dust_netherite', 'mysticalagriculture:netherite_essence') 
    poly2('6x minecraft:quartz', 'mysticalagriculture:nether_quartz_essence')
    poly2('10x minecraft:amethyst_shard', 'mysticalagriculture:amethyst_essence') //Minecraft
})
// Disabled Ores
/*
    poly2("3x #forge:raw_materials/platinum", 'mysticalagriculture:platinum_essence')
    poly2("2x #forge:raw_materials/iridium", 'mysticalagriculture:iridium_essence')
    poly2("2x #forge:dusts/invar", 'mysticalagriculture:invar_essence') 
*/     


