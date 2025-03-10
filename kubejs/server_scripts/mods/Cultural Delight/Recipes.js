// All recipe modifications to Cultural Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {

    const squids = [
        'squid', 'glow_squid'
    ]; // Defining squids

    // Removed recipes
    event.remove({id: 'culturaldelights:cutting/raw_calamari'})
    event.remove({id: 'culturaldelights:cutting/raw_calamari_from_glowsquid'})
    

    // Rewrited recipes 

    squids.forEach(squid => {
        event.smelting('3x minecraft:gravel', 'minecraft:stone')
        event.blasting('10x minecraft:iron_nugget', 'minecraft:iron_ingot')
        event.smoking('minecraft:tinted_glass', 'minecraft:glass').xp(0.35)
        event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)
    })


    event.recipes.farmersdelight.cutting(
        `culturaldelights:squid`,
        '#forge:tools/knives', 
        [ 
            '3x miners_delight:tentacles',
            '2x culturaldelights:raw_calamari',
            'minecraft:ink_sac',
            Item.of('2x minecraft:ink_sac')
                .withChance(0.5)
        ]
    ).id('kubejs:culturaldelights/cutting/raw_calamari')

    event.recipes.farmersdelight.cutting(
        `culturaldelights:glow_squid`,
        '#forge:tools/knives', 
        [ 
            '3x miners_delight:tentacles',
            '2x culturaldelights:raw_calamari',
            'minecraft:glow_ink_sac',
            Item.of('2x minecraft:glow_ink_sac')
                .withChance(0.5)
        ]
    ).id('kubejs:culturaldelights/cutting/raw_calamari_from_glowsquid')



})  