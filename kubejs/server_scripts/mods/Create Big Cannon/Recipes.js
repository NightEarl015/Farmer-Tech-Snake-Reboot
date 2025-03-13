// All recipe modifications to Create:Big Cannon
// Modified by NightEarl015

const castmouldsizes =[
  'very_small', 'small', 'medium', 'large', 'very_large', 'cannon_end', 'sliding_breech', 'screw_breech'
];

ServerEvents.recipes(event => {
  castmouldsizes.forEach(castmouldsize => {
    event.remove({output: `createbigcannons:${castmouldsize}_cast_mould`})
 })
})