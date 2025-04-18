// All recipe modifications to Create
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({output: 'create:cogwheel'})
  event.remove({output: 'create:large_cogwheel'})
  event.remove({output: 'create:andesite_alloy'})
  event.remove({id: 'create:mixing/honey'})

  // Rewrited recipes
  event.replaceOutput(
    {mod: 'create'}, 
    'create:honey',            
    'the_bumblezone:honey_fluid_still'
  )
  // Mixing
  event.recipes.create.mixing([Fluid.of('the_bumblezone:honey_fluid_still', 1000)], 'minecraft:honey_block').heated()

  // Materials
  event.shaped('create:andesite_alloy', 
    [
      'MAM',
      'AMA',
      'MAM'
    ],
    {
      A: 'minecraft:andesite',
      M: 'minecraft:iron_nugget'
    }
  ).id('kubejs:create/crafting/materials/andesite_alloy')

  event.shaped('create:andesite_alloy', 
    [
      'MAM',
      'AMA',
      'MAM'
    ],
    {
      A: 'minecraft:andesite',
      M: 'alltheores:zinc_nugget'
    }
  ).id('kubejs:create/crafting/materials/andesite_alloy_from_zinc')

  // Tier 1
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

  event.recipes.createSequencedAssembly(
    [
      Item.of('kubejs:uncoded_precision_mechanism').withChance(0.8),
      Item.of('minecraft:dead_bush').withChance(0.2)
    ],'alltheores:gold_plate', [
      event.recipes.createDeploying('kubejs:incomplete_uncoded_precision_mechanism', ['kubejs:incomplete_uncoded_precision_mechanism', 'minecraft:iron_nugget']),
      event.recipes.createDeploying('kubejs:incomplete_uncoded_precision_mechanism', ['kubejs:incomplete_uncoded_precision_mechanism', 'create:cogwheel']),
      event.recipes.createDeploying('kubejs:incomplete_uncoded_precision_mechanism', ['kubejs:incomplete_uncoded_precision_mechanism', 'create:large_cogwheel'])
    ]
  )
  .transitionalItem('kubejs:incomplete_uncoded_precision_mechanism')
  .loops(1)
  .id('kubejs:create/sequenced_assembly/uncoded_precision_mechanism')

  // Create Coin Maker
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
  create_coin_maker('3x kubejs:thermal_coin', '#forge:ingots/tin');
  create_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/signalum');
  create_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/gold');
  create_coin_maker('5x kubejs:thermal_coin', '#forge:ingots/lumium');
  create_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/enderium');
  create_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/netherite');
})