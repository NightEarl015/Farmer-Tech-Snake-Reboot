// Alloys recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees alloys
  const pballoysToRemove = [
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
  pballoysToRemove.forEach(alloysToRemove =>{
    event.remove({id: `productivebees:centrifuge/alloys/honeycomb_${alloysToRemove}`})
  })

  // Rewrited recipes
  alloysCentrifugeRecipes(event, "productivebees:brass",[
    {item: {tag: "forge:nuggets/brass"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/brass")
  alloysCentrifugeRecipes(event, "productivebees:bronze",[
    {item: {tag: "forge:nuggets/bronze"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/bronze")
  alloysCentrifugeRecipes(event, "productivebees:constantan",[
    {item: {tag: "forge:nuggets/constantan"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/constantan")
  alloysCentrifugeRecipes(event, "productivebees:electrum",[
    {item: {tag: "forge:nuggets/electrum"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/electrum")
  alloysCentrifugeRecipes(event, "productivebees:enderium",[
    {item: {tag: "forge:nuggets/enderium"}, min: 3, max: 5},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], "forge:nuggets/enderium")
  alloysCentrifugeRecipes(event, "productivebees:invar",[
    {item: {tag: "forge:nuggets/invar"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/invar")
  alloysCentrifugeRecipes(event, "productivebees:lumium",[
    {item: {tag: "forge:nuggets/lumium"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/lumium")
  alloysCentrifugeRecipes(event, "productivebees:mithril",[
    {item: {tag: "forge:nuggets/mithril"}, min: 3, max: 5},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], "forge:nuggets/mithril")
  alloysCentrifugeRecipes(event, "productivebees:signalum",[
    {item: {tag: "forge:nuggets/signalum"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/signalum")
  alloysCentrifugeRecipes(event, "productivebees:steel",[
    {item: {tag: "forge:nuggets/steel"}, min: 7, max: 12},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/steel")
})