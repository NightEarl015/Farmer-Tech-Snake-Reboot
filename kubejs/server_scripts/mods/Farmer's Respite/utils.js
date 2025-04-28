// Recipe utils for Farmer's Respite
// Authored by NightEarl015

// Custom Brewing Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputcount
 * @param { Array } inputfluid 
 * @param { string } time // Tick
 * @param { string } expnumber
 * @param { Array } input
 * @param { string } outputcount
 * @param { string } outputfluid
 */
function customBrewingRecipes(event, inputcount, inputfluid, time, expnumber, input, outputcount, outputfluid) {
  let customBrewingRecipe = {
    type: "farmersrespite:brewing",
    base: {
      count: inputcount,
      fluid: inputfluid
    },
    cookingtime: time,
    experience: expnumber,
    ingredients: input,
    result: {
      count: outputcount,
      fluid: outputfluid
    }
  };
  event.custom(customBrewingRecipe).id(`farmersrespite:brewing/${outputfluid.split(":")[1]}`)
}