// All tag modifications to Create:Big Cannon
// Modified by NightEarl015

ServerEvents.tags('item', event => {
  castmouldsizes.forEach(castmouldsize => {
    event.add('chipped:barrel', `createbigcannons:${castmouldsize}_cast_mould`)
  })
})

ServerEvents.tags('block', event => {
  castmouldsizes.forEach(castmouldsize => {
    event.add('chipped:barrel', `createbigcannons:${castmouldsize}_cast_mould`)
  }) 
})