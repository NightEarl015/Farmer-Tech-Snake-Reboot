// All recipe modifications to Create:Ratatouille
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({id: 'ratatouille:salt'})
    
    // Rewrited recipes
    event.recipes.create.mixing('ratatouille:', [Fluid.of('ratatouille:egg_yolk', 100), 'salt:sasalty_doughlt', 'create:wheat_flour']).id('kubejs:create/mixing/salty_dough')
})
