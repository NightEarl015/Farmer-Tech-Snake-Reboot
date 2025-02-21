// All recipe modifications to Create:Central Kitchen
// Modified by NightEarl015

ServerEvents.recipes(event => {
    event.recipes.create.mixing([Fluid.of('kubejs:liquid_dragon_essence', 250)], [Fluid.water(1000), 'mysticalagradditions:dragon_scale', 'mysticalagradditions:dragon_egg_chunk']).id('kubejs:create_central_kitchen/liquid_dragon_essence').superheated()
    event.recipes.create.mixing([Fluid.of('create_central_kitchen:dragon_breath', 250)], [Fluid.of('kubejs:liquid_dragon_essence', 1000), 'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence']).id('kubejs:create_central_kitchen/liquid_dragon_breath').superheated()
})