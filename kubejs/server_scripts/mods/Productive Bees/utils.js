// Recipe utils for Productive Bees
// Authored by NightEarl015

// Custom Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { Array } condition
 */
function customCentrifugeRecipes(event, bee, output, condition) {
  let customCentrifugeRecipe = {
    type: "productivebees:centrifuge",
    ingredient: {
      type: "forge:nbt",
      item: "productivebees:configurable_honeycomb",
      nbt: {
        EntityTag: {
          type: bee
        }
      }
    },
    outputs: output,
    conditions: condition
  };
  event.custom(customCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/custom/honeycomb_${bee.split(":")[1]}`)
}

// Custom Mixing Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } result
 * @param { string } heatrequirement
 * @param { Array } condition
 */
function customMixingCentrifugeRecipes(event, bee, result, heatrequirement, condition) {
  let customMixingCentrifugeRecipe = {
    type: "create:mixing",
    ingredient: [
      {
        type: "forge:nbt",
        item: "productivebees:configurable_honeycomb",
        nbt: {
          EntityTag: {
            type: bee
          }
        }
      }
    ],
    results: result,
    heatRequirement: heatrequirement,
    conditions: condition
  };
  event.custom(customMixingCentrifugeRecipe).id(`kubejs:productivebees/create/mixing/custom/honeycomb_${bee.split(":")[1]}`)
}