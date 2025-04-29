// All recipe modifications to Hearth and Harvest
// Modified by NightEarl015

ServerEvents.recipes(event => {

  // Defining Productive Bees alloys
  const HaHcookingfoodsToRemove = [
    'macaroni_and_cheese', 
    'unripe_cheddar_cheese_wheel',
    'unripe_goat_cheese_wheel',
    'mashed_potatoes',
    'caramel',
    'peanut_butter'
  ]; 

  const HaHagingfoodsToRemove = [
    'jerky', 
    'pickled_beetroots',
    'pickled_cabbage',
    'pickled_carrots',
    'pickled_onions',
    'pickled_potatoes'
  ]; 

  // Removed recipes

  HaHcookingfoodsToRemove.forEach(cookingfoodsToRemove =>{
    event.remove({id: `farmersdelight:cooking/${cookingfoodsToRemove}`})
  })

  HaHagingfoodsToRemove.forEach(agingfoodsToRemove =>{
    event.remove({id: `hearthandharvest:aging/${agingfoodsToRemove}`})
  })

  event.remove({id: 'minecraft:salt_from_bottle'})
  event.remove({id: 'minecraft:salt_from_bucket'})
  

  // Rewrited recipes
  event.replaceInput(
    { mod: 'hearthandharvest' }, 
    'hearthandharvest:salt',
    'salt:salt'
  )

  event.recipes.farmersdelight.cooking(
    [
      "farmersdelight:raw_pasta",
      "salt:salt",
      "#forge:milk/milk_bottle",
      "hearthandharvest:cheese_slices"
    ],
    "hearthandharvest:macaroni_and_cheese", 
    1.0, 
    200, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/macaroni_and_cheese')

  event.recipes.farmersdelight.cooking(
    [
      "#forge:milk/milk_bottle",
      "#forge:milk/milk_bottle",
      "salt:salt",
      "salt:salt"
    ],
    "hearthandharvest:unripe_cheddar_cheese_wheel", 
    2.0, 
    400, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/unripe_cheddar_cheese_wheel')

  event.recipes.farmersdelight.cooking(
    [
      "hearthandharvest:goat_milk_bottle",
      "hearthandharvest:goat_milk_bottle",
      "salt:salt",
      "salt:salt"
    ],
    "hearthandharvest:unripe_goat_cheese_wheel", 
    2.0, 
    400, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/unripe_goat_cheese_wheel')

  event.recipes.farmersdelight.cooking(
    [
      "minecraft:potato",
      "minecraft:potato",
      "salt:salt",
      "salt:salt",
      "#forge:milk/milk_bottle"
    ],
    "hearthandharvest:mashed_potatoes", 
    1.0, 
    200, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/mashed_potatoes')

  event.recipes.farmersdelight.cooking(
    [
      "minecraft:sugar",
      "minecraft:sugar",
      "salt:salt"
    ],
    "hearthandharvest:caramel", 
    1.0, 
    100, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/caramel')

  event.recipes.farmersdelight.cooking(
    [
      "hearthandharvest:peanut",
      "hearthandharvest:peanut",
      "hearthandharvest:peanut",
      "salt:salt",
      "minecraft:sugar",
      "minecraft:sugar"
    ],
    "hearthandharvest:peanut_butter", 
    1.0, 
    400, 
    "minecraft:bowl", 
  ).id('farmersdelight:cooking/peanut_butter')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "minecraft:rotten_flesh"},
        {item: "minecraft:rotten_flesh"},
        {item: "minecraft:rotten_flesh"}
      ],
      recipe_book_tab: "meals",
      result: {
        count: 3,
        item: "hearthandharvest:jerky"
      }
    }
  ).id('hearthandharvest:aging/jerky')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "minecraft:beetroot"},
        {item: "minecraft:beetroot"},
        {item: "hearthandharvest:jar"}
      ],
      recipe_book_tab: "meals",
      result: {
        item: "hearthandharvest:pickled_beetroots"
      }
    }
  ).id('hearthandharvest:aging/pickled_beetroots')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "farmersdelight:cabbage"},
        {item: "farmersdelight:cabbage"},
        {item: "hearthandharvest:jar"}
      ],
      recipe_book_tab: "meals",
      result: {
        item: "hearthandharvest:pickled_cabbage"
      }
    }
  ).id('hearthandharvest:aging/pickled_cabbage')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "minecraft:carrot"},
        {item: "minecraft:carrot"},
        {item: "hearthandharvest:jar"}
      ],
      recipe_book_tab: "meals",
      result: {
        item: "hearthandharvest:pickled_carrots"
      }
    }
  ).id('hearthandharvest:aging/pickled_carrots')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "farmersdelight:onion"},
        {item: "farmersdelight:onion"},
        {item: "hearthandharvest:jar"}
      ],
      recipe_book_tab: "meals",
      result: {
        item: "hearthandharvest:pickled_onions"
      }
    }
  ).id('hearthandharvest:aging/pickled_onions')

  event.custom(
    {
      type: "hearthandharvest:aging",
      cookingtime: 1200,
      experience: 1.0,
      ingredients: [
        {item: "salt:salt"},
        {item: "minecraft:potato"},
        {item: "minecraft:potato"},
        {item: "minecraft:rotten_flesh"}
      ],
      recipe_book_tab: "meals",
      result: {
        item: "hearthandharvest:pickled_potatoes"
      }
    }
  ).id('hearthandharvest:aging/pickled_potatoes')
  
})