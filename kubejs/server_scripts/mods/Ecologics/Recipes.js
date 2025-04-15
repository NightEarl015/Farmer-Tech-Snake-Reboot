// All recipe modifications to Ecologics
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'ecologics:tropical_stew'})

  // Rewrited recipes
  event.recipes.farmersdelight.cooking(
    [
      "#forge:crab_meat",
      "#forge:grain/rice",
      "farmersdelight:onions"
    ],
    "ecologics:tropical_stew", 
    0.35, 
    10, 
    "braziliandelight:coconut_slice", 
  ).id('kubejs:ecologics/tropical_stew')
})