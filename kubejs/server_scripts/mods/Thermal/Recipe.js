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

  // Rewrited recipes
  event.recipes.thermal.numismatic_fuel('kubejs:thermal_coin').energy(64000)

  /**
   * 
   * @param {OutputItem_} coin 
   * @param {InputItem_} material
   */
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