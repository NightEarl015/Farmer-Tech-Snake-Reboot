// All recipe modifications to Applied Flux
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'appflux:charger/energy_press'})

  // Rewrited Recipes
  event.shaped('appflux:energy_processor_press',
    [
      'EEE',
      'EIE', 
      'EEE'
    ],
    {
      E: 'mysticalagriculture:certus_quartz_essence',
      I: 'bigreactors:energycore'
    }
  ).id('appflux:energy_processor_press')

  event.recipes.createSequencedAssembly(
    [
      Item.of('appflux:printed_energy_processor')
    ],
    'enderio:redstone_alloy_ingot',
    [
      event.recipes.createDeploying('kubejs:incomplete_printed_energy_processor', ['kubejs:incomplete_printed_energy_processor', 'appflux:energy_processor_press']).keepHeldItem(),
      event.recipes.createPressing('kubejs:incomplete_printed_energy_processor', 'kubejs:incomplete_printed_energy_processor'),
    ]
  )
  .transitionalItem('kubejs:incomplete_printed_energy_processor')
  .loops(1)
  .id('appflux:create/sequenced_assembly/printed_energy_processor');

  event.recipes.createSequencedAssembly(
    [
      Item.of('appflux:energy_processor')
    ],
    'appflux:printed_energy_processor',
    [
      event.recipes.createDeploying('kubejs:incomplete_energy_processor', ['kubejs:incomplete_energy_processor', 'ae2:printed_silicon']),
      event.recipes.createDeploying('kubejs:incomplete_energy_processor', ['kubejs:incomplete_energy_processor', 'minecraft:redstone']),
    ]
  )
  .transitionalItem('kubejs:incomplete_energy_processor')
  .loops(1)
  .id('appflux:create/sequenced_assembly/energy_processor');

})
