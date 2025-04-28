// All recipe modifications to Mega Cells
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Rewrited Recipes
  event.recipes.create.compacting(
    'megacells:radioactive_cell_component', 
      [
      'megacells:cell_component_64m',
      'mekanism:radioactive_waste_barrel',
      'ae2:singularity'
      ]
  ).superheated()

  event.recipes.create.compacting(
    'megacells:bulk_cell_component', 
      [
      'megacells:cell_component_1m',
      'ae2:spatial_cell_component_2',
      'ae2:singularity'
      ]
  ).superheated()

  event.recipes.createSequencedAssembly(
    [
      Item.of('megacells:printed_accumulation_processor')
    ],
    'megacells:sky_steel_ingot',
    [
      event.recipes.createDeploying('kubejs:incomplete_printed_accumulation_processor', ['kubejs:incomplete_printed_accumulation_processor', 'megacells:accumulation_processor_press']).keepHeldItem(),
      event.recipes.createPressing('kubejs:incomplete_printed_accumulation_processor', 'kubejs:incomplete_printed_accumulation_processor'),
    ]
  )
  .transitionalItem('kubejs:incomplete_printed_accumulation_processor')
  .loops(1)
  .id('kubejs:megacells/create/sequenced_assembly/printed_accumulation_processor');

  event.recipes.createSequencedAssembly(
    [
      Item.of('megacells:accumulation_processor')
    ],
    'megacells:printed_accumulation_processor',
    [
      event.recipes.createDeploying('kubejs:incomplete_accumulation_processor', ['kubejs:incomplete_quantum_processor', 'ae2:printed_silicon']),
      event.recipes.createDeploying('kubejs:incomplete_accumulation_processor', ['kubejs:incomplete_quantum_processor', 'ae2:fluix_dust']),
    ]
  )
  .transitionalItem('kubejs:incomplete_accumulation_processor')
  .loops(1)
  .id('kubejs:megacells/create/sequenced_assembly/accumulation_processor');
})