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
 * @param { Array } heatrequirement
 * @param { Array } condition
 */
function customMixingCentrifugeRecipes(event, bee, result, heatrequirement, condition) {
  let customMixingCentrifugeRecipe = {
    type: "create:mixing",
    ingredients: [
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

// Custom Bee Produce Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } result
 * @param { Array } condition
 */
function customBeeProduceRecipes(event, bee, result, condition) {
  let customBeeProduceRecipe = {
    type: "productivebees:advanced_beehive",
    ingredient: bee,
    results: result,
    conditions: condition
  };
  event.custom(customBeeProduceRecipe).id(`kubejs:productivebees/bee_produce/custom/${bee.split(":")[1]}_bee`)
}

// Custom Bee Conversion Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputbee
 * @param { string } outputbee
 * @param { Array } item
 * @param { Array } condition
 */
function customBeeConversionRecipes(event, inputbee, outputbee, item, condition) {
  let customBeeConversionRecipe = {
    type: "productivebees:bee_conversion",
    source: inputbee,
    result: outputbee,
    item: item,
    conditions: condition
  };
  event.custom(customBeeConversionRecipe).id(`kubejs:productivebees/bee_conversion/custom/${inputbee.split(":")[1]}_bee`)
}


