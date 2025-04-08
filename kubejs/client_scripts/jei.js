JEIEvents.removeRecipes(event => {
  event.remove('create:sequenced_assembly', 'kubejs:create/sequenced_assembly/precision_mechanism')
})

JEIEvents.information(event => {
  event.addItem('create:precision_mechanism', [
    'In this modpack, crafting it requires the password, password will be generated the first time you launch the modpack.',
    'Try to making it using deployer, password consists of six digits from 2 to 7.'
  ])
  event.addItem('kubejs:uncoded_precision_mechanism', [
    'It is an important material in the manufacture of precision mechanisms.',
    'Use the numbers to assemble it to get precision mechanism.'
  ])
})