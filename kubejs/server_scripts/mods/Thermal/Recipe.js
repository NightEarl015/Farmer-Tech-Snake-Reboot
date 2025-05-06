// All recipe modifications to Thermal Series
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  const CoinsToRemove = [
    'thermal:iron_coin', 
    'thermal:gold_coin', 
    'thermal:copper_coin', 
    'thermal:netherite_coin', 
    'thermal:signalum_coin', 
    'thermal:lumium_coin', 
    'thermal:enderium_coin', 
    'thermal:tin_coin', 
    'thermal:lead_coin', 
    'thermal:silver_coin', 
    'thermal:nickel_coin', 
    'thermal:bronze_coin', 
    'thermal:electrum_coin', 
    'thermal:invar_coin',
    'thermal:constantan_coin',
    'thermalendergy:prismalium_coin',
    'thermalendergy:melodium_coin',
    'thermalendergy:stellarium_coin'
  ]; // Defining coins

  event.forEachRecipe({ type: "thermal:press" }, recipe => {
      recipe.json.get('result').forEach(item => {
        if (CoinsToRemove.includes(Item.of(item).id)) {
          event.remove({ id: recipe.getId() })
        }
      })
  })

  event.remove({type: 'thermal:numismatic_fuel'})
  event.remove({id: 'thermal:machines/centrifuge/centrifuge_honeycomb'})
  event.remove({id: 'thermal:machines/centrifuge/centrifuge_honey_bottle'})
  event.remove({id: 'thermal:machines/crucible/crucible_honey_block_to_honey'})


  // Rewrited recipes
  event.recipes.thermal.numismatic_fuel('kubejs:thermal_coin').energy(64000)
  event.recipes.thermal.centrifuge(Fluid.of('the_bumblezone:honey_fluid_still', 100), 'minecraft:honeycomb').energy(1000).xp(0.15).id('kubejs:thermal/machines/centrifuge/centrifuge_honeycomb')
  event.recipes.thermal.centrifuge([Fluid.of('the_bumblezone:honey_fluid_still', 250), 'minecraft:glass_bottle'], 'minecraft:honey_bottle').energy(1000).id('kubejs:thermal/machines/centrifuge/centrifuge_honey_bottle')
  event.recipes.thermal.crucible(Fluid.of('the_bumblezone:honey_fluid_still', 1000), 'minecraft:honey_block').energy(2000).id('kubejs:thermal/machines/crucible/crucible_honey_block_to_honey')
  event.recipes.thermal.chiller('minecraft:honey_block', Fluid.of('the_bumblezone:honey_fluid_still', 1000)).energy(2000).id('kubejs:thermal/machines/chiller/chiller_honey_to_honey_block')

  function thermal_coin_maker(coin, material) {
    event.recipes.thermal.press(coin, [material, 'thermal:press_coin_die'])
    .energy(1600)
    .id(`kubejs:thermal/pressing/${material.split("/")[1]}_to_coin`)  
  }
  thermal_coin_maker('kubejs:thermal_coin', '#forge:ingots/copper');
  thermal_coin_maker('kubejs:thermal_coin', '#forge:ingots/prismalium');
  thermal_coin_maker('kubejs:thermal_coin', '#forge:ingots/melodium');
  thermal_coin_maker('2x kubejs:thermal_coin', '#forge:ingots/iron');
  thermal_coin_maker('2x kubejs:thermal_coin', '#forge:ingots/stellarium');
  thermal_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/signalum');
  thermal_coin_maker('4x kubejs:thermal_coin', '#forge:ingots/gold');
  thermal_coin_maker('5x kubejs:thermal_coin', '#forge:ingots/lumium');
  thermal_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/enderium');
  thermal_coin_maker('10x kubejs:thermal_coin', '#forge:ingots/netherite');
  
  const materials= [
    'nickel', 'silver', 'tin', 'steel', 'rose_gold', 'bronze', 'invar', 'electrum', 'constantan'
  ];

  materials.forEach(material => {
    event.recipes.thermal.press('3x kubejs:thermal_coin', [`#forge:ingots/${material}`, 'thermal:press_coin_die'])
    .energy(1600)
    .id(`kubejs:thermal/pressing/${material}_to_coin`)
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:industrial_salt', count: 9},{item: 'thermal:press_packing_3x3_die'}],
    result:{ item: 'kubejs:block_industrial_salt'},
    energy: 400,
    conditions: [{type: 'thermal:flag', flag: 'mod_mekanism'}]
  }).id('kubejs:thermal/compat/press_industrial_salt_packing')

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:block_industrial_salt'},{item: 'thermal:press_unpacking_die'}],
    result:{ item: 'kubejs:industrial_salt', count: 9},
    energy: 400,
    conditions: [{type: 'thermal:flag', flag: 'mod_mekanism'}]
  }).id('kubejs:thermal/compat/press_industrial_salt_unpacking')
})