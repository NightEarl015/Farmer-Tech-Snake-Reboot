// All recipe modifications to Botanypotstiers
// Modified by NightEarl015

ServerEvents.recipes(event => {

    // Removed recipes

    //event.remove({mod: "botanypotstiers"})

    /*
    const colors = [
        'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_gray', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
    ]; // Defining colors
    colors.forEach(color => {
        event.remove({output: `botanypotstiers:creative_${color}_terracotta_botany_pot`})
        event.remove({output: `botanypotstiers:creative_${color}_terracotta_hopper_botany_pot`})
        event.remove({output: `botanypotstiers:creative_${color}_concrete_botany_pot`})
        event.remove({output: `botanypotstiers:creative_${color}_concrete_hopper_botany_pot`})
        event.remove({output: `botanypotstiers:creative_${color}_glazed_terracotta_botany_pot`})
        event.remove({output: `botanypotstiers:creative_${color}_glazed_terracotta_hopper_botany_pot`})
    });
    */

    // Rewrited recipes
    // Unique recipes
    // Elite Botany pot 
    event.shaped(
        Item.of('botanypotstiers:elite_terracotta_botany_pot', 1),
        [
            'III',
            'IOI', 
            'IPI'
        ],
        {
            I: 'minecraft:iron_block',
            P: 'minecraft:ender_pearl',
            O: 'botanypots:terracotta_botany_pot'
        }
    ).id('kubejs:botanypots/elite_botany_pot')
    
    // Elite Hopper Botany pot #1
    event.shapeless(
        Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1),
        [
            'botanypotstiers:elite_terracotta_hopper_botany_pot',
            'minecraft:hopper'
        ],
    ).id('kubejs:botanypots/elite_hopper_botany_pot')

    // Elite Hopper Botany pot #2
    event.shaped(
        Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1),
        [
            'UYU',
            'IOI', 
            'IPI'
        ],
        {
            Y: 'minecraft:ender_pearl',
            U: 'minecraft:terracotta',
            I: 'minecraft:iron_block',
            O: 'botanypots:terracotta_botany_pot',
            P: 'minecraft:hopper'
            
        }
    ).id('kubejs:botanypots/elite_hopper_botany_pot_2')

    // Elite Hopper Botany pot #3
    event.shaped(
        Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1),
        [
            'I I',
            'IOI', 
            'IPI'
        ],
        {
            I: 'minecraft:iron_block',
            O: 'minecraft:ender_pearl',
            P: 'botanypots:terracotta_hopper_botany_pot'
            
        }
    ).id('kubejs:botanypots/elite_hopper_botany_pot_3')



    // Similar recipes
    const colors = [
        'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_gray', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
    ]; // Defining colors

    // Elite Botany Pot #1(Terracotta)
    colors.forEach(color => {
        event.shaped(
            Item.of(`botanypotstiers:elite_${color}_terracotta_botany_pot`, 1),
            [
                'UPU',
                'IOI', 
                'IUI'
            ],
            {
                U: `minecraft:${color}_terracotta`,
                I: 'minecraft:iron_block',
                P: 'minecraft:ender_pearl',
                O: 'botanypots:terracotta_botany_pot'
            }
        ).id(`kubejs:botanypots/elite_${color}_botany_pot`)   
    // Elite Botany Pot #2(Terracotta)    
        event.shaped(
            Item.of(`botanypotstiers:elite_${color}_terracotta_botany_pot`, 1),
            [
                'I I',
                'IPI', 
                'IOI'
            ],
            {
                I: 'minecraft:iron_block',
                P: 'minecraft:ender_pearl',
                O: `botanypots:${color}_terracotta_botany_pot`
            }
        ).id(`kubejs:botanypots/elite_${color}_botany_pot_2`)
    // Elite Botany Pot #1(Concrete)
        event.shaped(
            Item.of(`botanypotstiers:elite_${color}_concrete_botany_pot`, 1),
            [
                'UPU',
                'IOI', 
                'IUI'
            ],
            {
                U: `minecraft:${color}_concrete`,
                I: 'minecraft:iron_block',
                P: 'minecraft:ender_pearl',
                O: 'botanypots:terracotta_botany_pot'
            }
        ).id(`kubejs:botanypots/elite_${color}_concrete_botany_pot`)
    // Elite Botany Pot #2(Concrete)
        event.shaped(
            Item.of(`botanypotstiers:elite_${color}_concrete_botany_pot`, 1),
            [
                'I I',
                'IPI', 
                'IOI'
            ],
            {
                I: 'minecraft:iron_block',
                P: 'minecraft:ender_pearl',
                O: `botanypots:${color}_concrete_botany_pot`
            }
        ).id(`kubejs:botanypots/elite_${color}_concrete_botany_pot_2`)    
    }) 
    // Elite Hopper Botany Pot #1(Terracotta)
    colors.forEach(color => {
        event.shapeless(
            Item.of(`botanypotstiers:elite_${color}_terracotta_botany_pot`, 1),
            [
                `botanypotstiers:elite_${color}_terracotta_botany_pot`,
                'minecraft:hopper'
            ],
        ).id(`kubejs:botanypots/elite_${color}_terracotta_hopper_botany_pot`)    
    })
    // Elite Hopper Botany Pot #2(Terracotta)
    colors.forEach(color => {
        event.shapeless(
            Item.of(`botanypotstiers:elite_${color}_terracotta_botany_pot`, 1),
            [
                `botanypotstiers:elite_${color}_terracotta_botany_pot`,
                'minecraft:hopper'
            ],
        ).id(`kubejs:botanypots/elite_${color}_terracotta_hopper_botany_pot`)    
    })       
})