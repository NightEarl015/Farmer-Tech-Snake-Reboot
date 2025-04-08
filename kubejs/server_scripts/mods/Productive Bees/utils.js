// Recipe utils 
// Authored by NightEarl015

// Mod Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } modid 
 */
function modsCentrifugeRecipes(event, bee, output, modid) {
  let modsCentrifugeRecipe = {
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
  event.custom(modsCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/${modid}/honeycomb_${bee.split(":")[1]}`)
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
  let rawmaterialsCentrifugeRecipe = {
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
  event.custom(rawmaterialsCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/raw_materials/honeycomb_${bee.split(":")[1]}`)
}

// Gems Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } tag
 */
function gemsCentrifugeRecipes(event, bee, output, tag) {
  let gemsCentrifugeRecipe = {
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
  event.custom(gemsCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/gems/honeycomb_${bee.split(":")[1]}`)
}

// Reactors Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 * @param { string } nbt
 * @param { string } tag
 */
function reactorsCentrifugeRecipes(event, bee, nbt, output, tag) {
  let reactorsCentrifugeRecipe = {
    type: "productivebees:centrifuge",
    conditions: [
    {
      type: "productivebees:bee_exists",
      bee: bee
    },
    {
      type: "forge:not",
      value: {
        type: "forge:tag_empty",
        tag: tag
      }
    }
  ],
    ingredient: {
      type: "forge:nbt",
      count: 1,
      item: "productivebees:configurable_honeycomb",
      nbt: nbt
    },
    outputs: output
  };
  event.custom(reactorsCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/reactors/honeycomb_${bee.split(":")[1]}`)
}

// Vanilla Centrifuge Recipes

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } bee
 * @param { Array } output 
 */
function vanillasCentrifugeRecipes(event, bee, output) {
  let vanillasCentrifugeRecipe = {
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
    outputs: output
  };
  event.custom(vanillasCentrifugeRecipe).id(`kubejs:productivebees/centrifuge/honeycomb_${bee.split(":")[1]}`)
}
