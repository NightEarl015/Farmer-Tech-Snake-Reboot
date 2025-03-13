// All tag modifications to Veggies Delight
// Modified by NightEarl015

ServerEvents.tags('item', event => {
  event.add('eclipticseasons:crops/spring', [
    'veggiesdelight:mature_dandelion',
  ])
  event.add('eclipticseasons:crops/summer', [
    'veggiesdelight:bellpepper_seed',
    'veggiesdelight:sweet_potato',
    'veggiesdelight:wild_sweet_potatoes',
    'veggiesdelight:wild_bellpeppers'
  ])
  event.add('eclipticseasons:crops/spring_summer', [
    'veggiesdelight:wild_garlic',
    'veggiesdelight:wild_cauliflowers',
    'veggiesdelight:cauliflower_seeds',
  ])
})

ServerEvents.tags('block', event => {
  event.add('eclipticseasons:crops/spring', [
    'veggiesdelight:mature_dandelion',
  ])
  event.add('eclipticseasons:crops/summer', [
    'veggiesdelight:bellpepper_crop',
    'veggiesdelight:sweet_potato_crop',
    'veggiesdelight:wild_sweet_potatoes',
    'veggiesdelight:wild_bellpeppers'
  ])
  event.add('eclipticseasons:crops/spring_summer', [
    'veggiesdelight:wild_garlic',
    'veggiesdelight:wild_cauliflowers',
    'veggiesdelight:cauliflower_crop'
  ])
})