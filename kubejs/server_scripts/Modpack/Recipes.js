// All recipe modifications to Custom Item
// Modified by NightEarl015

ServerEvents.recipes(event => {

  event.shaped('kubejs:block_industrial_salt',
    [
      'SSS',
      'SSS', 
      'SSS'
    ],
    {
      S: 'kubejs:industrial_salt'
    }
  ).id('kubejs:storage_blocks/industrial_salt')

  event.shapeless('9x kubejs:industrial_salt',
      [
        'kubejs:block_industrial_salt'
      ],
  ).id('kubejs:storage_blocks/industrial_salt_block_uncraft')

  event.shaped('kubejs:small_wood_gear',
    [
      ' S ',
      'SPS', 
      ' S '
    ],
    {
      S: 'minecraft:stone',
      P: "#minecraft:planks"
    }
  ).id("kubejs:small_wood_gear")

  event.shaped('kubejs:large_wood_gear',
    [
      "PSP",
      "SPS", 
      "PSP"
    ],
    {
      S: 'minecraft:stone',
      P: "#minecraft:planks"
    }
  ).id("kubejs:large_wood_gear")

  event.recipes.enderio.sag_milling(
    [
      Ingredient.of("alltheores:iron_dust", 2),
      Item.of("alltheores:copper_dust", 3),
      "2x alltheores:gold_dust",
      "alltheores:lead_dust"
    ],
    "kubejs:mixed_ore_1",
    3500,
    EnderIOBonusType.NONE
  ).id('enderio:sag_milling/mixed_ore_1')

  event.recipes.create.crushing(
    [
      '2x alltheores:iron_dust', 
      Item.of('alltheores:copper_dust', 3).withChance(0.6),
      Item.of('alltheores:gold_dust', 2).withChance(0.4),
      Item.of('alltheores:lead_dust', 1).withChance(0.2),
    ], 
    'kubejs:mixed_ore_1'
  )
  .processingTime(800)
  .id('create:crushing/mixed_ore_1')
})
