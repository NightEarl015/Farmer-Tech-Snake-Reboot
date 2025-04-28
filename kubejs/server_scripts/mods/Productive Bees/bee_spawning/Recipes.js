//
//

ServerEvents.recipes(event => {
  customBeeSpawningRecipes(event, "productivebees:anglesite",
    "productivebees:end_stone_nest", "bigreactors:anglesite_crystal",
    "#minecraft:is_end", [
    {type: "productivebees:bee_exists", bee: "productivebees:anglesite"}
  ]);
})