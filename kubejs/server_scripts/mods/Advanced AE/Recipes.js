// All recipe modifications to Advanced AE
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Rewrited Recipes
  event.recipes.createSequencedAssembly(
    [
      Item.of('advanced_ae:printed_quantum_processor')
    ],
    'advanced_ae:quantum_alloy',
    [
      event.recipes.createDeploying('kubejs:incomplete_printed_quantum_processor', ['kubejs:incomplete_printed_quantum_processor', 'advanced_ae:quantum_processor_press']).keepHeldItem(),
      event.recipes.createPressing('kubejs:incomplete_printed_quantum_processor', 'kubejs:incomplete_printed_quantum_processor'),
    ]
  )
  .transitionalItem('kubejs:incomplete_printed_quantum_processor')
  .loops(1)
  .id('kubejs:advanced_ae/create/sequenced_assembly/printed_quantum_processor');

  event.recipes.createSequencedAssembly(
    [
      Item.of('advanced_ae:quantum_processor')
    ],
    'advanced_ae:printed_quantum_processor',
    [
      event.recipes.createDeploying('kubejs:incomplete_quantum_processor', ['kubejs:incomplete_quantum_processor', 'ae2:printed_silicon']),
      event.recipes.createDeploying('kubejs:incomplete_quantum_processor', ['kubejs:incomplete_quantum_processor', 'minecraft:redstone']),
    ]
  )
  .transitionalItem('kubejs:incomplete_quantum_processor')
  .loops(1)
  .id('kubejs:advanced_ae/create/sequenced_assembly/quantum_processor');

})