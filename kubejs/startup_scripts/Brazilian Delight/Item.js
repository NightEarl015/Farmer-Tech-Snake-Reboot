ItemEvents.modification(event => {
  event.modify('braziliandelight:garlic_clove', item => {
    item.foodProperties = food => {
      food.hunger(1)
      food.effect('dumplings_delight:garlic', 800, 0, 1.0)
    }
  })
  event.modify('braziliandelight:garlic_bulb', item => {
    item.foodProperties = food => {
      food.hunger(1)
      food.effect('dumplings_delight:garlic', 1500, 0, 1.0)
    }
  })
})