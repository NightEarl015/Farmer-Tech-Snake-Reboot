// Reactors recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees reactors
  const reactorsToRemove = [
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
  reactorsToRemove.forEach(reactorsToRemove =>{
    event.remove({id: `productivebees:centrifuge/reactors/honeycomb_${reactorsToRemove}`})
  })

  // Rewrited recipes
  customCentrifugeRecipes(event, "productivebees:blutonium", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/blutonium"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:blutonium"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/blutonium"}}]);
  customCentrifugeRecipes(event, "productivebees:cyanite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/cyanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:cyanite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/cyanite"}}]);
  customCentrifugeRecipes(event, "productivebees:graphite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/graphite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:graphite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/graphite"}}]);
  customCentrifugeRecipes(event, "productivebees:inanite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/inanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:inanite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/inanite"}}]);
  customCentrifugeRecipes(event, "productivebees:insanite",  [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/insanite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:insanite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/insanite"}}]);
  customCentrifugeRecipes(event, "productivebees:ludicrite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/ludicrite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:ludicrite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/ludicrite"}}]);
  customCentrifugeRecipes(event, "productivebees:magentite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/magentite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:magentite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/magentite"}}]);
  customCentrifugeRecipes(event, "productivebees:ridiculite", [
    {item: {tag: "forge:wax"}},
    {item: {tag: "forge:ingots/ridiculite"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "productivebees:bee_exists", bee: "productivebees:ridiculite"},
    {type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:ingots/ridiculite"}}]);
})