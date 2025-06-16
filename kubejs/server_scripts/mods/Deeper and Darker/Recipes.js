// All recipe modifications to Deeper and Darker
// Modified by NightEarl015

ServerEvents.recipes(event => {
  const ResonariumToolsTypes = [
    'axe', 'boots', 'chestplate', 'helmet', 'hoe', 'leggings', 'pickaxe', 'shovel', 'sword'
  ]; // Defining Resonarium Tools Type


  // Removed Recipes
  ResonariumToolsTypes.forEach(ResonariumToolsType => {
    event.remove({id: `deeperdarker:resonarium_${ResonariumToolsType}_smithing`})
  })
  

  // Rewrited Recipes
  ResonariumToolsTypes.forEach(ResonariumToolsType => {
    event.smithing(
    `deeperdarker:resonarium_${ResonariumToolsType}`,  
    'deeperdarker:resonarium_plate', 
    `minecraft:diamond_${ResonariumToolsType}`
    ).id(`deeperdarker:resonarium_${ResonariumToolsType}_smithing`)
  })
})