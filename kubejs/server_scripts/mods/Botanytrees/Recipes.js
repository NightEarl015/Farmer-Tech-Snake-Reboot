// All recipe modifications to Botanytrees
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'botanytrees:ecologics/coconut'})

  // Rewrited recipes
  event.custom({
    "bookshelf:load_conditions": [{type: "bookshelf:item_exists", values:["ecologics:coconut_seedling"]}],
    type: 'botanypots:crop',
    seed: {"item":"ecologics:coconut_seedling"},
    categories: ["dirt","sand"],
    growthTicks: 2400,
    display:{block:"ecologics:coconut_seedling"},
    drops:[
      {chance:1.00, output:{item:"ecologics:coconut_log"}, minRolls:2, maxRolls:4},
      {chance:0.25, output:{item:"minecraft:stick"}, minRolls:1, maxRolls:2},
      {chance:0.25, output:{item:"braziliandelight:coconut"}, minRolls:1, maxRolls:2},
      {chance:0.15, output:{item:"braziliandelight:green_coconut"}, minRolls:1, maxRolls:2},
      {chance:0.05, output:{item:"ecologics:coconut_seedling"}}
    ]
  }).id('kubejs:botanytrees/ecologics/coconut')
})