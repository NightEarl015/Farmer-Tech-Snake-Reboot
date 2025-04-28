// All recipe modifications to Create:Ratatouille
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'ratatouille:salt'})
  event.remove({id: 'create:mixing/salty_dough'})
  
  // Rewrited recipes
  event.recipes.create.mixing('ratatouille:salty_dough', [Fluid.of('ratatouille:egg_yolk', 100), 'salt:salt', 'create:wheat_flour']).id('kubejs:create/mixing/salty_dough')
})
