// All recipe modifications to Brewin' And Chewin'
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed Recipes
  event.remove({id: 'brewinandchewin:fermenting/mead_from_honey'})
  event.remove({id: 'brewinandchewin:fermenting/pickled_pickles'})

  // Rewrited Recipes
  event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
      count: 1000,
      fluid: "the_bumblezone:honey_fluid_still"
    },
    experience: 1.0,
    fermentingtime: 9600,
    ingredients: [
      {
        "item": "minecraft:wheat"
      },
      {
        "item": "minecraft:wheat_seeds"
      },
      {
        "item": "minecraft:sweet_berries"
      }
    ],
    recipe_book_tab: "drinks",
    result: {
      count: 1000,
      fluid: "brewinandchewin:mead"
    },
  }).id('kubejs:brewinandchewin/fermenting/mead_from_honey')
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 250,
      fluid: "the_bumblezone:honey_fluid_still"
    },
  experience: 1.0,
  fermentingtime: 9600,
  ingredients: [
    {
      "item": "minecraft:sea_pickle"
    },
    {
      "item": "minecraft:sea_pickle"
    },
    {
      "item": "minecraft:glow_berries"
    }
  ],
  recipe_book_tab: "meals",
  result: {
    count: 2,
    item: "brewinandchewin:pickled_pickles"
  },
  temperature: 2
  }).id('kubejs:brewinandchewin/fermenting/pickled_pickles')
})