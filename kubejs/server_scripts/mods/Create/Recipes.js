// All recipe modifications to Create
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'create:cogwheel'})
  event.remove({output: 'create:large_cogwheel'})
  event.remove({output: 'create:andesite_alloy'})

  // Rewrited recipes
  event.replaceOutput(
    {mod: 'create'}, 
    'create:honey',            
    'the_bumblezone:honey_fluid_still'
  )

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
  event.shaped('create:cogwheel', 
      [
        'G',
        'S', 
        'G'
      ],
      {
        S: 'create:shaft',
        G: 'kubejs:small_wood_gear'
      }
  ).id('kubejs:create/crafting/kinetics/cogwheel')

  event.shaped('create:large_cogwheel',
      [
        'G',
        'S', 
        'G'
      ],
      {
        S: 'create:shaft',
        G: 'kubejs:large_wood_gear'
      }
  ).id('kubejs:create/crafting/kinetics/large_cogwheel')
  
  event.recipes.create.deploying([Item.of('create:cogwheel').withChance(0.8)], ['create:shaft', 'kubejs:small_wood_gear']).id('kubejs:create/item_application/cogwheel')
  event.recipes.create.deploying([Item.of('create:large_cogwheel').withChance(0.8)], ['create:shaft', 'kubejs:large_wood_gear']).id('kubejs:create/item_application/large_cogwheel')

  /**
   * 
   * @param {OutputItem_} coin 
   * @param {InputItem_} material
   */
  function create_coin_maker(coin, material){
    event.recipes.create.deploying(coin, [material, 'thermal:press_coin_die']).keepHeldItem()
    .id(`kubejs:create/deploying/${material.split("/")[1]}_to_coin`)
  }
  create_coin_maker('kubejs:thermal_coin', '#forge:ingots/copper');
  create_coin_maker('kubejs:thermal_coin', '#forge:ingots/prismalium');
  create_coin_maker('kubejs:thermal_coin', '#forge:ingots/melodium');
  create_coin_maker('2x kubejs:thermal_coin', '#forge:ingots/iron');
  create_coin_maker('2x kubejs:thermal_coin', '#forge:ingots/stellarium');
  create_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/signalum');
  create_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/gold');
  create_coin_maker('5x kubejs:thermal_coin', '#forge:ingots/lumium');
  create_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/enderium');
  create_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/netherite');
})