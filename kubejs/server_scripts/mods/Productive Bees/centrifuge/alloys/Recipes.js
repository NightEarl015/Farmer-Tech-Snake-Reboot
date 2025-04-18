// Alloys centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees alloys
  const alloysCentrifugeToRemove = [
    'brass', 
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'invar',
    'lumium',
    'mitril',
    'signalum',
    'steel'
  ]; 

  // Removed recipes
  alloysCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/alloys/honeycomb_${centrifugeToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:brass", [
    { item: {tag: "forge:nuggets/brass"}, min: 4, max: 6},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/brass"}},
  {type: "productivebees:bee_exists", bee: "productivebees:brass"}]);

  customCentrifugeRecipes(event, "productivebees:bronze",[
    {item: {tag: "forge:nuggets/bronze"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/bronze"}},
    {type: "productivebees:bee_exists", bee: "productivebees:bronze"}]);
  customCentrifugeRecipes(event, "productivebees:constantan",[
    {item: {tag: "forge:nuggets/constantan"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/constantan"}},
    {type: "productivebees:bee_exists", bee: "productivebees:constantan"}]);
  customCentrifugeRecipes(event, "productivebees:electrum",[
    {item: {tag: "forge:nuggets/electrum"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/electrum"}},
    {type: "productivebees:bee_exists", bee: "productivebees:electrum"}]);
  customCentrifugeRecipes(event, "productivebees:enderium",[
    {item: {tag: "forge:nuggets/enderium"}, min: 3, max: 5},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/enderium"}},
    {type: "productivebees:bee_exists", bee: "productivebees:enderium"}]);
  customCentrifugeRecipes(event, "productivebees:invar",[
    {item: {tag: "forge:nuggets/invar"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/invar"}},
    {type: "productivebees:bee_exists", bee: "productivebees:invar"}]);
  customCentrifugeRecipes(event, "productivebees:lumium",[
    {item: {tag: "forge:nuggets/lumium"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/lumium"}},
    {type: "productivebees:bee_exists", bee: "productivebees:lumium"}]);
  customCentrifugeRecipes(event, "productivebees:mithril",[
    {item: {tag: "forge:nuggets/mithril"}, min: 3, max: 5},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 25}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/mithril"}},
    {type: "productivebees:bee_exists", bee: "productivebees:mithril"}]);
  customCentrifugeRecipes(event, "productivebees:signalum",[
    {item: {tag: "forge:nuggets/signalum"}, min: 4, max: 6},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/signalum"}},
    {type: "productivebees:bee_exists", bee: "productivebees:signalum"}]);
  customCentrifugeRecipes(event, "productivebees:steel",[
    {item: {tag: "forge:nuggets/steel"}, min: 7, max: 12},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:nuggets/steel"}},
    {type: "productivebees:bee_exists", bee: "productivebees:steel"}]);
})