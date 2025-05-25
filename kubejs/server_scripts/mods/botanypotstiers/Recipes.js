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
        function pottier1(output, casing, pot, material){
            event.shaped(output, [
                'CCC',
                'CPC',
                'CMC'
            ], {
                C: casing,
                P: pot,
                M: material
            }).id(`botanypotstiers:${output.split(":")[1]}`)  
        }
        pottier1('botanypotstiers:elite_terracotta_botany_pot', 'minecraft:iron_block', 'botanypots:terracotta_botany_pot', 'minecraft:ender_pearl')
        pottier1('botanypotstiers:ultra_terracotta_botany_pot', 'minecraft:diamond_block', 'botanypotstiers:elite_terracotta_botany_pot', 'minecraft:nether_star')

        
        const pottiers = [
            'elite', 'ultra'
        ]; // Defining levels

        // Elite & Ultra Hopper Botany pot #1
        pottiers.forEach(level => {
            event.shapeless(`botanypotstiers:${pottier}_terracotta_hopper_botany_pot`,
                [
                    `botanypotstiers:${pottier}_terracotta_botany_pot`,
                    'minecraft:hopper'
                ],
            ).id(`botanypotstiers:${pottier}_hopper_botany_pot`)
        });

        // Elite & Ultra Hopper Botany pot #2
        function pottier2(output, casing, pot, material){
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
            }).id(`botanypotstiers:${output.split(":")[1]}_2`)
        }
        pottier2('botanypotstiers:elite_terracotta_hopper_botany_pot', 'minecraft:iron_block', 'botanypots:terracotta_botany_pot', 'minecraft:ender_pearl')
        pottier2('botanypotstiers:ultra_terracotta_hopper_botany_pot', 'minecraft:diamond_block', 'botanypotstiers:elite_terracotta_botany_pot', 'minecraft:nether_star')

        // Elite & Ultra Hopper Botany pot #3
        function pottier3(output, casing, material){
            event.shaped(output, [
                "   ",
                "CMC",
                "CPC"
            ], {
                C: casing,
                P: "botanypots:terracotta_hopper_botany_pot",
                M: material,
            }).id(`botanypotstiers:${output.split(":")[1]}_3`)
        }
        pottier3('botanypotstiers:elite_terracotta_hopper_botany_pot', 'minecraft:iron_block', 'minecraft:ender_pearl')
        pottier3('botanypotstiers:ultra_terracotta_hopper_botany_pot', 'minecraft:diamond_block', 'minecraft:nether_star')

        // Similar recipes
        const potcolors = [
            'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_gray', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
        ]; // Defining colors

        const pottypes1 = [
            'terracotta', 'concrete', 'glazed_terracotta'
        ]; // Defining types1

        const pottypes2 = [
            'terracotta_hopper', 'concrete_hopper', 'glazed_terracotta_hopper'
        ]; // Defining types2


        potcolors.forEach(potcolor => {
            pottypes1.forEach(pottype1 => {
                pottypes2.forEach(pottype2 => {
                    // Elite Botany Pot #1(Any Material)
                    event.shaped(`botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`,
                        [
                            'UEU',
                            'IPI', 
                            'IUI'
                        ],
                        {
                            U: `minecraft:${potcolor}_${pottype1}`,
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: 'botanypots:terracotta_botany_pot'
                        }
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`)
                    // Elite Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`,
                        [
                            '   ',
                            'IEI', 
                            'IPI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${potcolor}_${pottype1}_botany_pot`,
                        }
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot_2`) 

                    // Elite Hopper Botany Pot #1(Any Material)
                    event.shapeless(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot`,
                        [
                            `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`,
                            'minecraft:hopper'
                        ],
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot`)

                    // Elite Hopper Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot`,
                        [
                            'IEI',
                            'IPI', 
                            'IHI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${potcolor}_${pottype1}_botany_pot`,
                            H: 'minecraft:hopper'
                        }
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot_2`)

                    // Elite Hopper Botany Pot #3(Any Material)
                    event.shaped(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot`,
                        [
                            '   ',
                            'IEI', 
                            'IPI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${potcolor}_${pottype2}_botany_pot`,
                        }
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot_3`)

                    // Elite Hopper Botany Pot #4(Any Material)
                    event.shaped(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot`,
                        [
                            'IEI ',
                            'MPM', 
                            'IHI'
                        ],
                        {
                            I: 'minecraft:iron_block',
                            E: 'minecraft:ender_pearl',
                            P: `botanypots:${potcolor}_${pottype1}_botany_pot`,
                            H: 'minecraft:hopper',
                            M: `minecraft:${potcolor}_${pottype1}`
                        }
                    ).id(`botanypotstiers:elite_${potcolor}_${pottype2}_botany_pot_4`)
                    
                    // Ultra Botany Pot
                    // Ultra Botany Pot #1(Any Material)
                    event.shaped(`botanypotstiers:ultra_${potcolor}_${pottype1}_botany_pot`,
                        [
                            'MNM',
                            'DOD', 
                            'DPD'
                        ],
                        {
                            M: `minecraft:${potcolor}_${pottype1}`,
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`
                        }
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype1}_botany_pot`)
                    
                    // Ultra Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:ultra_${potcolor}_${pottype1}_botany_pot`,
                        [
                            '   ',
                            'DOD', 
                            'DND'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`
                        }
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype1}_botany_pot_2`)

                    // Ultra Hopper Botany Pot #1(Any Material)
                    event.shapeless(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot`,
                        [
                            `botanypotstiers:ultra_${potcolor}_${pottype1}_botany_pot`,
                            'minecraft:hopper'
                        ],
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot`)

                    // Ultra Hopper Botany Pot #2(Any Material)
                    event.shaped(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot`,
                        [
                            'DND',
                            'DPD', 
                            'DHD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            H: 'minecraft:hopper',
                            P: `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`

                        }
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot_2`)

                    // Ultra Hopper Botany Pot #3(Any Material)
                    event.shaped(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot`,
                        [
                            '   ',
                            'DND', 
                            'DPD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            P: `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`

                        }
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot_3`)
                    
                    // Ultra Hopper Botany Pot #4(Any Material)
                    event.shaped(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot`,
                        [
                            'DND',
                            'DPD', 
                            'DHD'
                        ],
                        {
                            D: 'minecraft:diamond_block',
                            N: 'minecraft:nether_star',
                            H: 'minecraft:hopper',
                            P: `botanypotstiers:elite_${potcolor}_${pottype1}_botany_pot`

                        }
                    ).id(`botanypotstiers:ultra_${potcolor}_${pottype2}_botany_pot_4`)
                });
            });
        });       
    })       
} else { 
    console.log("Botanypotstiers was not found, skipping its compat scripts.") 
}