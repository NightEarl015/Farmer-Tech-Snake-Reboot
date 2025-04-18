// Reactors Bee Produce recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Rewrited Recipes
  customBeeProduceRecipes(event, "productivebees:anglesite", [
  {item: {type: "forge:nbt", item: "productivebees:configurable_honeycomb", nbt: {EntityTag: {type: "productivebees:anglesite"}}}},
  {item: {tag: "forge:pollen"}, chance: 5}], [
  {type: "productivebees:bee_exists", bee: "productivebees:anglesite"}]);
  customBeeProduceRecipes(event, "productivebees:benitoite", [
  {item: {type: "forge:nbt", item: "productivebees:configurable_honeycomb", nbt: {EntityTag: {type: "productivebees:benitoite"}}}},
  {item: {tag: "forge:pollen"}, chance: 5}], [
  {type: "productivebees:bee_exists", bee: "productivebees:benitoite"}]);
})