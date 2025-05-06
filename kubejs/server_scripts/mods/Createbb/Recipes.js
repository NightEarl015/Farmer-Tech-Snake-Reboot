// All recipe modifications to Create:Broken Bad
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: 'createbb:phase2/acetic_anhydride_mixing'})
  event.remove({id: 'createbb:phase2/methanol_mixing'})
  event.remove({id: 'createbb:phase2/water_electrolysis'})
  event.remove({id: 'createbb:phase2/copper_zinc_catalyst'})

  // Rewrited recipes

  // Acetic Anhydride Mixing
  event.recipes.create.mixing([Fluid.of('createbb:phenylacetic_acid', 25)], [Fluid.of('mekanism:oxygen', 50), 'minecraft:sugar']).id('createbb:acetic_anhydride_mixing') 
  // Methanol Mixing
  event.recipes.create.mixing([Fluid.of('createbb:methanol', 50)], [Fluid.of('mekanism:hydrogen', 100), 'minecraft:coal', 'createbb:copper_zinc_catalyst']).id('createbb:methanol_mixing') 
  //Water Mix-Hydrodistillation
  event.recipes.create.mixing([Fluid.of('mekanism:oxygen', 5), Fluid.of('mekanism:hydrogen', 10)], [Fluid.of('minecraft:water', 30), 'minecraft:coal', 'createbb:copper_zinc_catalyst']).heated().id('createbb:water_mix_hydrodistillation') 

  /*
  //Copper Zinc Catalyst(WIP)
  event.recipes.enderio.alloy_smelting(
      Item.of("createbb:copper_zinc_catalyst"),
      Ingredient.of("minecraft:carrot", "2x #forge:dusts/copper", "2x #forge:dusts/zinc")
  );
  */
})