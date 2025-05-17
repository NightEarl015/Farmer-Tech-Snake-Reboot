// All recipe modifications to Dungeons Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
  event.recipes.create.crushing('10x dungeonsdelight:stained_scrap', [Item.of('enderio:broken_spawner').ignoreNBT()]).id('dungeonsdelight:stained_scrap')
})