// Reactors recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees reactors
  const pbreactorsToRemove = [
    'blutonium', 
    'cyanite',
    'graphite',
    'inanite',
    'insanite',
    'ludicrite',
    'magentite',
    'ridiculite'
  ]; 

  // Removed recipes
  pbreactorsToRemove.forEach(reactorsToRemove =>{
    event.remove({id: `productivebees:centrifuge/reactors/honeycomb_${reactorsToRemove}`})
  })

  // Rewrited recipes
  reactorsCentrifugeRecipes(event, "productivebees:blutonium", 
    "{EntityTag:{type:\"productivebees:blutonium\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/blutonium"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/blutonium")
  reactorsCentrifugeRecipes(event, "productivebees:cyanite", 
    "{EntityTag:{type:\"productivebees:cyanite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/cyanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/cyanite")
  reactorsCentrifugeRecipes(event, "productivebees:graphite", 
    "{EntityTag:{type:\"productivebees:graphite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/graphite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/graphite")
  reactorsCentrifugeRecipes(event, "productivebees:inanite", 
    "{EntityTag:{type:\"productivebees:inanite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/inanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/inanite")
  reactorsCentrifugeRecipes(event, "productivebees:insanite", 
    "{EntityTag:{type:\"productivebees:insanite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/insanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/insanite")
  reactorsCentrifugeRecipes(event, "productivebees:ludicrite", 
    "{EntityTag:{type:\"productivebees:ludicrite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/ludicrite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/ludicrite")
  reactorsCentrifugeRecipes(event, "productivebees:magentite", 
    "{EntityTag:{type:\"productivebees:magentite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/magentite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/magentite")
  reactorsCentrifugeRecipes(event, "productivebees:ridiculite", 
    "{EntityTag:{type:\"productivebees:ridiculite\"}}", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/ridiculite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:ingots/ridiculite")
})