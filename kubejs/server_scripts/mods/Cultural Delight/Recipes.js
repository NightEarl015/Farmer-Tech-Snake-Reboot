// All recipe modifications to Cultural Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {


    // Removed recipes
    event.remove({id: 'culturaldelights:cutting/raw_calamari'})
    event.remove({id: 'culturaldelights:cutting/raw_calamari_from_glowsquid'})
    

    // Rewrited recipes 

    event.recipes.farmersdelight.cutting(
        `culturaldelights:squid`,
        '#forge:tools/knives', 
        [ 
            '3x crabbersdelight:raw_squid_tentacles',
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
            '3x crabbersdelight:raw_glow_squid_tentacles',
            '2x culturaldelights:raw_calamari',
            'minecraft:glow_ink_sac',
            Item.of('2x minecraft:glow_ink_sac')
                .withChance(0.5)
        ]
    ).id('kubejs:culturaldelights/cutting/raw_calamari_from_glowsquid')



})  