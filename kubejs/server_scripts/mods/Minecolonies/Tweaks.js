// priority: 100

/*

// All tweaks to Minecolonies
// Tweaked by NightEarl015

// Recipe utils based on kubejs
// Datapack Gen
ServerEvents.lowPriorityData(event => {
  let customColonycrafterRecipes = (count, crafter, input, output) => {
    let customColonycrafterRecipeJson = JsonIO.toObject(
      {
        type: "recipe",
        count: count,
        crafter: crafter,
        inputs: input,
        intermediate: "minecraft:air",
        "min-building-level": 4 ,
        result: output,
        "show-tooltip": true
      }
    )
    event.addJson(`minecolonies:crafterrecipes/${crafter.split("_")[0]}/${output.split(":")[1]}`, customColonycrafterRecipeJson)
  }
  // Chef
  customColonycrafterRecipes(2, "chef_crafting", [
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:onion"},
    {"item": "minecolonies:chicken_broth"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:beetroot"},
    {"item": "minecraft:beetroot"}
  ], "minecolonies:borscht")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "culturaldelights:eggplant"},
    {"item": "minecolonies:feta_cheese"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:tomato"},
    {"item": "minecolonies:durum"},
    {"item": "farmersdelight:onion"}
  ], "minecolonies:eggplant_dolma")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:cabbage"},
    {"item": "minecraft:cod"},
    {"item": "minecraft:brown_mushroom"},
  ], "minecolonies:fish_dinner")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "minecolonies:durum"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "minecraft:brown_mushroom"},
    {"item": "farmersdelight:onion"},
    {"item": "minecraft:mutton"},
  ], "minecolonies:hand_pie")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "farmersdelight:onion"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "minecraft:carrot"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:carrot"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:brown_mushroom"},
    {"item": "farmersdelight:cabbage"},
    {"item": "minecraft:mutton"},
  ], "minecolonies:lamb_stew")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "minecolonies:flatbread"},
    {"item": "minecolonies:chickpea"},
    {"item": "minecolonies:chickpea"},
    {"item": "culturaldelights:eggplant"},
    {"item": "farmersdelight:onion"},
    {"item": "braziliandelight:garlic_bulb"},
  ], "minecolonies:pita_hummus")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "minecraft:kelp"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:onion"},
    {"item": "minecolonies:raw_noodle"},
    {"item": "minecolonies:soysauce"},
  ], "minecolonies:ramen")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "mynethersdelight:bullet_pepper"},
    {"item": "mynethersdelight:bullet_pepper"},
    {"item": "culturaldelights:eggplant"},
    {"item": "culturaldelights:eggplant"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:onion"},
    {"item": "minecraft:bowl"},
  ], "minecolonies:spicy_eggplant")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "farmersdelight:onion"},
    {"item": "culturaldelights:eggplant"},
    {"item": "minecraft:beef"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:potato"},
  ], "minecolonies:steak_dinner")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "minecolonies:manchet_bread"},
    {"item": "farmersdelight:tomato"},
    {"item": "farmersdelight:cabbage"},
    {"item": "farmersdelight:onion"},
  ], "minecolonies:stew_trencher")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "farmersdelight:cooked_rice"},
    {"item": "mynethersdelight:bullet_pepper"},
    {"item": "farmersdelight:tomato"},
    {"item": "minecraft:carrot"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "culturaldelights:eggplant"},
  ], "minecolonies:stuffed_pepper")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "minecolonies:flatbread"},
    {"item": "farmersdelight:tomato"},
    {"item": "farmersdelight:onion"},
    {"item": "culturaldelights:eggplant"},
    {"item": "braziliandelight:garlic_bulb"},
  ], "minecolonies:stuffed_pita")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "farmersdelight:cooked_rice"},
    {"item": "minecraft:salmon"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "minecraft:dried_kelp"},
    {"item": "farmersdelight:onion"},
  ], "minecolonies:sushi_roll")
  customColonycrafterRecipes(1, "chef_crafting", [
    {"item": "mynethersdelight:bullet_pepper"},
    {"item": "braziliandelight:garlic_bulb"},
    {"item": "culturaldelights:tortilla"},
    {"item": "culturaldelights:tortilla"},
    {"item": "minecraft:beef"},
    {"item": "farmersdelight:tomato"},
  ], "minecolonies:tacos")

  const removedColonyCrops = [
    'bell_pepper', 'cabbage', 'corn', 'garlic', 'nether_pepper', 'onion', 'soybean', 'tomato', 'chickpea', 'eggplant'
  ];
  removedColonyCrops.forEach(removedColonyCrop => {
    event.addJson(`minecolonies:loot_tables/blocks/${removedColonyCrop}`, {
      type: "minecraft:block",
      pools: [],
      random_sequence: `minecolonies:blocks/${removedColonyCrop}`
    })
  })
})
*/





