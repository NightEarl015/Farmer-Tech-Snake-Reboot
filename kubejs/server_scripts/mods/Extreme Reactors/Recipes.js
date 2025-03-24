// All recipe modifications to Extreme Reactors
// Modified by NightEarl015

ServerEvents.recipes(event => {

  // Rewrited Recipes
  event.custom({
    type: "productivebees:bee_spawning",
    ingredient: {item:"productivebees:end_stone_nest"},
    results:[{bee:"productivebees:anglesite_bee"}]
  }).id('kubejs:productivebees/recipes/bee_spawning/anglesite_coarse_end_stone_nest')
  event.custom({
    type: "productivebees:bee_spawning",
    ingredient: {item:"productivebees:nether_brick_nest"},
    results:[{bee:"productivebees:benitoite_bee"}]
  }).id('kubejs:productivebees/recipes/bee_spawning/benitoite_coarse_nether_brick_nest')
})