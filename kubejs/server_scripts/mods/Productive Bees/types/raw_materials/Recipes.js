// Raw materials recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees raw materials
  const pbrawmaterialsToRemove = [
    'aluminium', 
    'bismuth',
    'copper',
    'gold',
    'iridium',
    'iron',
    'leader',
    'netherite',
    'nickel',
    'osmium',
    'platinum',
    'radioactive',
    'silver',
    'tin',
    'titanium',
    'tungsten',
    'zinc'
  ]; 

  // Removed recipes
  pbrawmaterialsToRemove.forEach(rawmaterialsToRemove =>{
    event.remove({id: `productivebees:centrifuge/raw_materials/honeycomb_${rawmaterialsToRemove}`})
  })
  
  // Rewrited recipes
  rawmaterialsCentrifugeRecipes(event, "productivebees:aluminum", [
    {item: {tag: "forge:raw_materials/aluminum"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/aluminum")
  rawmaterialsCentrifugeRecipes(event, "productivebees:bismuth", [
    {item: {tag: "forge:raw_materials/bismuth"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/bismuth")
  rawmaterialsCentrifugeRecipes(event, "productivebees:copper", [
    {item: {tag: "forge:raw_materials/copper"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/copper")
  rawmaterialsCentrifugeRecipes(event, "productivebees:gold", [
    {item: {tag: "#forge:raw_materials/gold"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "#forge:raw_materials/gold")
  rawmaterialsCentrifugeRecipes(event, "productivebees:iridium", [
    {item: {tag: "forge:nuggets/iridium"}, min: 1, max: 3, chance: 70},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:nuggets/iridium")
  rawmaterialsCentrifugeRecipes(event, "productivebees:iron", [
    {item: {tag: "forge:raw_materials/iron"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/iron")
  rawmaterialsCentrifugeRecipes(event, "productivebees:lead", [
    {item: {tag: "forge:raw_materials/lead"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/lead")
  rawmaterialsCentrifugeRecipes(event, "productivebees:netherite", [
    {item: {item: "minecraft:netherite_scrap"}, chance: 10},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "minecraft:netherite_scrap")
  rawmaterialsCentrifugeRecipes(event, "productivebees:nickel", [
    {item: {tag: "forge:raw_materials/nickel"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/nickel")
  rawmaterialsCentrifugeRecipes(event, "productivebees:osmium", [
    {item: {tag: "forge:raw_materials/osmium"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/osmium")
  rawmaterialsCentrifugeRecipes(event, "productivebees:platinum", [
    {item: {tag: "forge:raw_materials/platinum"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/platinum")
  rawmaterialsCentrifugeRecipes(event, "productivebees:radioactive", [
    {item: {tag: "forge:raw_materials/uranium"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/uranium")
  rawmaterialsCentrifugeRecipes(event, "productivebees:silver", [
    {item: {tag: "forge:raw_materials/silver"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/silver")
  rawmaterialsCentrifugeRecipes(event, "productivebees:tin", [
    {item: {tag: "forge:raw_materials/tin"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/tin")
  rawmaterialsCentrifugeRecipes(event, "productivebees:titanium", [
    {item: {tag: "forge:raw_materials/titanium"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/titanium")
  rawmaterialsCentrifugeRecipes(event, "productivebees:tungsten", [
    {item: {tag: "forge:raw_materials/tungsten"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/tungsten")
  rawmaterialsCentrifugeRecipes(event, "productivebees:zinc", [
    {item: {tag: "forge:raw_materials/zinc"}, chance: 40},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:raw_materials/zinc")
})