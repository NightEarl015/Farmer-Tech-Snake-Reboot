// All recipe modifications to Casualness Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'casualness_delight:cooking/beef_noodles'})

  

  // Rewrited recipes
  event.recipes.farmersdelight.cooking(
	  [
      "minecraft:beef",
      "minecraft:beef",
      "#forge:pasta",
      "#forge:vegetables/carrot",
      "#forge:crops/cabbage",
      "#forge:vegetables/onion"
    ],
	    "casualness_delight:beef_noodles", 
	    0, 
	    200, 
	    "minecraft:bowl", 
	).id('casualness_delight:cooking/beef_noodles')
})