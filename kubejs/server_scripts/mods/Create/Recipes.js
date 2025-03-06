// All recipe modifications to Create
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({output: 'create:cogwheel'})
    event.remove({output: 'create:large_cogwheel'})
    event.remove({output: 'create:andesite_alloy'})

    // Rewrited recipes

    // Material
    function andesite_alloy(output, material){
        event.shaped(output, [
            'MAM',
            'AMA',
            'MAM'

        ], {
            A: 'minecraft:andesite',
            M: material
        })
    }
    andesite_alloy("create:andesite_alloy", 'minecraft:iron_nugget')/*.id('kubejs:create/materials/andesite_alloy')*/
    andesite_alloy("create:andesite_alloy", 'alltheores:zinc_nugget')/*.id('kubejs:create/materials/andesite_alloy_from_zinc')*/

    //Tier 1
    event.shaped(
        Item.of('create:cogwheel', 1), 
        [
          'S',
          'G', 
          'S'
        ],
        {
          S: 'create:shaft',
          G: 'kubejs:small_wood_gear'
        }
    ).id('kubejs:create/crafting/kinetics/cogwheel')

    event.shaped(
        Item.of('create:large_cogwheel', 1), 
        [
          'S',
          'G', 
          'S'
        ],
        {
          S: 'create:shaft',
          G: 'kubejs:large_wood_gear'
        }
    ).id('kubejs:create/crafting/kinetics/large_cogwheel')
})