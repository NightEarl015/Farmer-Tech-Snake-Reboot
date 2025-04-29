// All recipe modifications to Botanytrees
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'botanytrees:ecologics/coconut'})

  // Rewrited recipes
  event.custom({
    "bookshelf:load_conditions": [{type: "bookshelf:item_exists", values:["braziliandelight:coconut_palm_sapling"]}],
    type: 'botanypots:crop',
    seed: {"item":"braziliandelight:coconut_palm_sapling"},
    categories: ["dirt","sand"],
    growthTicks: 2400,
    display:{block:"braziliandelight:coconut_palm_sapling"},
    drops:[
      {chance:1.00, output:{item:"ecologics:coconut_log"}, minRolls:2, maxRolls:4},
      {chance:0.25, output:{item:"minecraft:stick"}, minRolls:1, maxRolls:2},
      {chance:0.25, output:{item:"braziliandelight:coconut"}, minRolls:1, maxRolls:2},
      {chance:0.15, output:{item:"braziliandelight:green_coconut"}, minRolls:1, maxRolls:2},
      {chance:0.05, output:{item:"braziliandelight:coconut_palm_sapling"}}
    ]
  }).id('botanytrees:braziliandelight/coconut_palm')
})