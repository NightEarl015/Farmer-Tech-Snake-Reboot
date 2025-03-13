// All tag modifications to Ecliptic Seasons
// Modified by NightEarl015

ServerEvents.tags('item', event => {
  event.add('eclipticseasons:crops/spring_summer_autumn', [
    'minecraft:oak_sapling',
    'minecraft:dark_oak_sapling',
    'minecraft:birch_sapling',
    'minecraft:cherry_sapling'
  ])
  event.add('eclipticseasons:crops/autumn', [
    'minecraft:acacia_sapling',
  ])
  event.add('eclipticseasons:crops/spring_summer', [
    'minecraft:jungle_sapling',
  ])
  event.add('eclipticseasons:crops/winter', [
    'minecraft:spruce_sapling',
  ])
})

ServerEvents.tags('block', event => {
  event.add('eclipticseasons:crops/spring_summer_autumn', [
    'minecraft:oak_sapling',
    'minecraft:dark_oak_sapling',
    'minecraft:birch_sapling',
    'minecraft:cherry_sapling',
    'minecraft:oak_leaves',
    'minecraft:dark_oak_leaves',
    'minecraft:birch_leaves',
    'minecraft:cherry_leaves'
  ])
  event.add('eclipticseasons:crops/autumn', [
    'minecraft:acacia_sapling',
    'minecraft:acacia_leaves'
  ])
  event.add('eclipticseasons:crops/spring_summer', [
    'minecraft:jungle_sapling',
    'minecraft:acacia_leaves'
  ])
  event.add('eclipticseasons:crops/winter', [
    'minecraft:spruce_sapling',
    'minecraft:spruce_leaves'
  ])
})
