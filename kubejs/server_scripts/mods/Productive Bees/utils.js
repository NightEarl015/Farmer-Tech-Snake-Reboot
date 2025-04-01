// Recipe utils 
// Authored by NightEarl015

// Mod Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } modid 
 */
function modCentrifugeRecipes(event, bee, output, modid) {
  let modCentrifugeRecipe = {
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
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: modid
      },
      {
        type: "productivebees:bee_exists",
        bee: bee
      }
    ]
  };
  event.custom(modCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/${modid}/honeycomb_${bee.split(":")[1]}`)
}

// Alloys Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } tag
 */
function alloysCentrifugeRecipes(event, bee, output, tag, type) {
  let alloysCentrifugeRecipe = {
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
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: tag
        }
      },
      {
        type: "productivebees:bee_exists",
        bee: bee
      }
    ]
  };
  event.custom(alloysCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/alloys/honeycomb_${bee.split(":")[1]}`)
}

// Raw Materials Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } tag
 */
function rawmaterialsCentrifugeRecipes(event, bee, output, tag) {
  let alloysCentrifugeRecipe = {
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
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: tag
        }
      }
    ]
  };
  event.custom(alloysCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/raw_materials/honeycomb_${bee.split(":")[1]}`)
}

// Gems Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } tag
 */
function gemsCentrifugeRecipes(event, bee, output, tag) {
  let alloysCentrifugeRecipe = {
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
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: tag
        }
      }
    ]
  };
  event.custom(alloysCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/gems/honeycomb_${bee.split(":")[1]}`)
}