// All recipe modifications to Extreme Reactors
// Modified by NightEarl015

ServerEvents.recipes(event => {

  // Rewrited Recipes
  event.replaceOutput(
    {mod: 'productivebees'}, 
    'productivebees:honey',            
    'the_bumblezone:honey_fluid_still'
  )
  event.custom({
    type: "productivebees:bee_spawning",
    ingredient: {item:"productivebees:end_stone_nest"},
    results:[{bee:"productivebees:anglesite_bee"}]
  }).id('kubejs:productivebees/recipes/bee_spawning/anglesite_coarse_end_stone_nest')
  event.custom({
    type: "productivebees:advanced_beehive",
    ingredient: "productivebees:anglesite",
    results:[
      {
        item: {
          type: "forge:nbt",
          item: "productivebees:configurable_honeycomb",
          nbt: {
            EntityTag: {
              type: "productivebees:anglesite"
            }
          }
        }
      },
      {
        item: {
          tag: "forge:pollen"
        },
        chance: 5
      }
    ],
    conditions:[
      {
        type: "productivebees:bee_exists",
        bee: "productivebees:anglesite"
      }
    ]
  }).id('kubejs:productivebees/recipes/bee_produce/reactors')
  event.custom({
    type: "productivebees:centrifuge",
    conditions: [
    {
      type: "productivebees:bee_exists",
      bee: "productivebees:anglesite"
    },
    {
      type: "forge:not",
      value: {
        type: "forge:tag_empty",
        tag: "bigreactors:anglesite_crystal"
      }
    }
  ],
  ingredient: {
    type: "forge:nbt",
    count: 1,
    item: "productivebees:configurable_honeycomb",
    nbt: "{EntityTag:{type:\"productivebees:anglesite\"}}"
  },
  "outputs": [
    {
      item: {
        tag: "forge:wax"
      }
    },
    {
      item: {
        tag: "bigreactors:anglesite_crystal"
      }
    },
    {
      amount: 50,
      fluid: {
        fluid: "the_bumblezone:honey_fluid_still"
      }
    }
  ]
  }).id('kubejs:productivebees/recipes/centrifuge/reactors/honeycomb_anglesite')

})