// All recipe modifications to Engineers Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed Recipes
  event.remove({id: 'tmted:crusher/wheat_flour' })
  event.remove({id: 'tmted:crusher/wheat_flour_from_bale' })

  // Rewrited Recipes
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 1600,
    input: { item: 'minecraft:wheat' },
    result: { item: 'create:wheat_flour', count: 2 },
    secondaries:
    [
      {
        chance: 0.25,
        output: { item: 'farmersdelight:straw'}
      }
    ]
  }).id('tmted:crusher/wheat_flour')

  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 1600,
    input: { item: 'minecraft:hay_block' },
    result: { item: 'create:wheat_flour', count: 18 },
    secondaries:
    [
      {
        chance: 1,
        output: {item: 'farmersdelight:straw', count: 5 }
      },
      {
        chance: 0.25,
        output:{item: 'farmersdelight:straw', count: 4}
      }
    ]
    }).id('tmted:crusher/wheat_flour_from_bale')


  event.replaceInput(
    { input: 'tmted:wheat_flour' }, 
    'create:wheat_flour',            
    'create:wheat_flour'         
  )
})