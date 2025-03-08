// All recipe modifications to Botanypotstiers
// Modified by NightEarl015

if (Platform.isLoaded('botanypotstiers')) {
    console.log("Botanypotstiers found, loading compat scripts...")
    ServerEvents.recipes(event => {

        // Removed recipes
        event.remove({mod: "botanypotstiers"})
        // Rewrited recipes
        // Unique recipes

        // Elite & Ultra Botany pot 
        function ulevel(output, casing, pot, material){
            event.shaped(output, [
                'CCC',
                'CPC',
                'CMC'
            ], {
                C: casing,
                P: pot,
                M: material
            })
        }
        ulevel('botanypotstiers:elite_terracotta_botany_pot', 'mysticalagriculture:certus_quartz_essence', 'botanypots:terracotta_botany_pot', 'minecraft:ender_pearl')
        ulevel('botanypotstiers:ultra_terracotta_botany_pot', 'mysticalagriculture:certus_quartz_essence', 'botanypotstiers:elite_terracotta_botany_pot', 'minecraft:nether_star')

        
        const levels = [
            'elite', 'ultra'
        ]; // Defining levels

        // Elite & Ultra Hopper Botany pot #1
        levels.forEach(level => {
            event.shapeless(`botanypotstiers:${level}_terracotta_hopper_botany_pot`,
                [
                    `botanypotstiers:${level}_terracotta_botany_pot`,
                    'minecraft:hopper'
                ],
            ).id(`kubejs:botanypotstiers/${level}_hopper_botany_pot`)
        });

        // Elite & Ultra Hopper Botany pot #2
        function ulevel2(output, casing, pot, material){
            event.shaped(output, [
                'TMT',
                'CPC',
                'CHC'
            ], {
                C: casing,
                P: pot,
                M: material,
                H: 'minecraft:hopper',
                T: 'minecraft:terracotta'
            })
        }
        ulevel2('botanypotstiers:elite_terracotta_hopper_botany_pot', 'minecraft:iron_block', 'botanypots:terracotta_botany_pot', 'minecraft:ender_pearl')
        ulevel2('botanypotstiers:ultra_terracotta_hopper_botany_pot', 'minecraft:diamond_block', 'botanypotstiers:elite_terracotta_botany_pot', 'minecraft:nether_star')

        // Elite & Ultra Hopper Botany pot #3
        function ulevel3(output, casing, material){
            event.shaped(output, [
                "   ",
                "CMC",
                "CPC"
            ], {
                C: casing,
                P: "botanypots:terracotta_hopper_botany_pot",
                M: material,
            })
        }
        ulevel3('botanypotstiers:elite_terracotta_hopper_botany_pot', 'minecraft:iron_block', 'minecraft:ender_pearl')
        ulevel3('botanypotstiers:ultra_terracotta_hopper_botany_pot', 'minecraft:diamond_block', 'minecraft:nether_star')

        // Similar recipes
        const colors = [
            'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_gray', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
        ]; // Defining colors

        const types1 = [
            'terracotta', 'concrete', 'glazed_terracotta'
        ]; // Defining types
        const types2 = [
            'terracotta_hopper', 'concrete_hopper', 'glazed_terracotta_hopper'
        ]; // Defining types


        colors.forEach(color => {
            types1.forEach(type1 =>{
                types2.forEach(type2 =>{
                    // Elite Botany Pot #1(Any Material)
                    event.shaped(`botanypotstiers:elite_${color}_${type1}_botany_pot`,
                        [
                            'UEU',
                            'IPI', 
                            'IUI'
                        ],
                        {
                            U: `minecraft:${color}_${type1}`,
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: 'botanypots:terracotta_botany_pot'
                        }
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type1}_botany_pot`)
                    // Elite Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:elite_${color}_${type1}_botany_pot`,
                        [
                            '   ',
                            'IEI', 
                            'IPI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${color}_${type1}_botany_pot`,
                        }
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type1}_botany_pot_2`) 

                    // Elite Hopper Botany Pot #1(Any Material)
                    event.shapeless(`botanypotstiers:elite_${color}_${type2}_botany_pot`,
                        [
                            `botanypotstiers:elite_${color}_${type1}_botany_pot`,
                            'minecraft:hopper'
                        ],
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type2}_botany_pot`)

                    // Elite Hopper Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:elite_${color}_${type2}_botany_pot`,
                        [
                            'IEI',
                            'IPI', 
                            'IHI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${color}_${type1}_botany_pot`,
                            H: 'minecraft:hopper'
                        }
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type2}_botany_pot_2`)

                    // Elite Hopper Botany Pot #3(Any Material)
                    event.shaped(`botanypotstiers:elite_${color}_${type2}_botany_pot`,
                        [
                            '   ',
                            'IEI', 
                            'IPI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${color}_${type2}_botany_pot`,
                        }
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type2}_botany_pot_3`)

                    // Elite Hopper Botany Pot #4(Any Material)
                    event.shaped(`botanypotstiers:elite_${color}_${type2}_botany_pot`,
                        [
                            'IEI ',
                            'MPM', 
                            'IHI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${color}_${type1}_botany_pot`,
                            H: 'minecraft:hopper',
                            M: `minecraft:${color}_${type1}`
                        }
                    ).id(`kubejs:botanypotstiers/elite_${color}_${type2}_botany_pot_4`)
                    
                    // Ultra Botany Pot
                    // Ultra Botany Pot #1(Any Material)
                    event.shaped(`botanypotstiers:ultra_${color}_${type1}_botany_pot`,
                        [
                            'MNM',
                            'DOD', 
                            'DPD'
                        ],
                        {
                            M: `minecraft:${color}_${type1}`,
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${color}_${type1}_botany_pot`
                        }
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type1}_botany_pot`)
                    
                    // Ultra Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:ultra_${color}_${type1}_botany_pot`,
                        [
                            '   ',
                            'DOD', 
                            'DND'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${color}_${type1}_botany_pot`
                        }
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type1}_botany_pot_2`)

                    // Ultra Hopper Botany Pot #1(Any Material)
                    event.shapeless(`botanypotstiers:ultra_${color}_${type2}_botany_pot`,
                        [
                            `botanypotstiers:ultra_${color}_${type1}_botany_pot`,
                            'minecraft:hopper'
                        ],
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type2}_botany_pot`)

                    // Ultra Hopper Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:ultra_${color}_${type2}_botany_pot`,
                        [
                            'DND',
                            'DPD', 
                            'DHD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            H: 'minecraft:hopper',
                            P: `botanypotstiers:elite_${color}_${type1}_botany_pot`

                        }
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type2}_botany_pot_2`)

                    // Ultra Hopper Botany Pot #3(Any Material)
                    event.shaped(`botanypotstiers:ultra_${color}_${type2}_botany_pot`,
                        [
                            '   ',
                            'DND', 
                            'DPD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${color}_${type1}_botany_pot`

                        }
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type2}_botany_pot_3`)
                    
                    // Ultra Hopper Botany Pot #4(Any Material)
                    event.shaped(`botanypotstiers:ultra_${color}_${type2}_botany_pot`,
                        [
                            'DND',
                            'DPD', 
                            'DHD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            H: 'minecraft:hopper',
                            P: `botanypotstiers:elite_${color}_${type1}_botany_pot`

                        }
                    ).id(`kubejs:botanypotstiers/ultra_${color}_${type2}_botany_pot_4`)
                });
            });
        });       
    })       
} else { 
    console.log("Botanypotstiers was not found, skipping its compat scripts.") 
}