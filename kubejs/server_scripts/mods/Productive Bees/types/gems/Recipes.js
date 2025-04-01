// Gems recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees gems
  const pbgemsToRemove = [
    'brass', 
    'bronze',
    'constantan',
    'electrum',
    'invar',
    'lumium',
    'mitril',
    'signalum',
    'steel'
  ]; 

  // Removed recipes
  pbgemsToRemove.forEach(gemsToRemove =>{
    event.remove({id: `productivebees:centrifuge/gems/honeycomb_${gemsToRemove}`})
  })

  // Rewrited recipes
  gemsCentrifugeRecipes(event, "productivebees:agate",[
    {item: {tag: "forge:gems/agate"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/agate")
})