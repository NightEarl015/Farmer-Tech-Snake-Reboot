// All tag modifications to Brazilian Delight
// Modified by NightEarl015

ServerEvents.tags('item', event => {
  event.add('forge:vegetables', [
    'braziliandelight:garlic_bulb',
    'braziliandelight:garlic_clove'
  ])
  event.add('forge:vegetables/garlic', [
    'braziliandelight:garlic_bulb',
    'braziliandelight:garlic_clove'
  ])
  event.add('forge:fruits/cirtus', 'braziliandelight:lemon', )
  event.add('barbequesdelight:skewer_fruits', 'braziliandelight:lemon', )
})