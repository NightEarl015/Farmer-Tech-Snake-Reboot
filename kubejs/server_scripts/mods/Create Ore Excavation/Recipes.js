// All recipe modifications to Create Ore Excavation
// Modified by NightEarl015

ServerEvents.recipes(event => {

  // Removed Recipes
  event.remove({ type: 'createoreexcavation:vein' })


  // Rewrited Recipes
  event.recipes.createoreexcavation.vein('Mixed Ore #1 Vein', 'kubejs:mixed_ore_1')
  .priority(0)
	.placement(128, 8, 1544847576)
	.id("createoreexcavation:ore_vein_type/mixed_ore_1_vein")

  event.recipes.createoreexcavation.drilling('kubejs:mixed_ore_1', 'createoreexcavation:ore_vein_type/mixed_ore_1_vein', 300)
		.id("createoreexcavation:drilling/mixed_ore_1");
})