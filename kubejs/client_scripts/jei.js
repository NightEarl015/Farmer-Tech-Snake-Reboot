JEIEvents.removeRecipes(event => {
  event.remove('create:sequenced_assembly', 'kubejs:create/sequenced_assembly/precision_mechanism')
})

JEIEvents.information(event => {
  event.addItem('create:precision_mechanism', [
    'In this modpack, crafting it requires the password, the password will be generated the first time you launch the modpack.',
    'Try making it using the create\'s deploy method, password consists of six digits, excluding 8 and 9. '
  ])
  event.addItem('kubejs:uncoded_precision_mechanism', [
    'It is an important material in the manufacture of precision mechanisms.',
    'Use the numbers to assemble it to get precisionmechanism.'
  ])
})