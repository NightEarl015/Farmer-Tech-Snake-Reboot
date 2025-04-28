ItemEvents.modification(event => {
  event.modify('createcafe:roasted_coffee_beans', item => {
    item.foodProperties = food => {
      food.hunger(0.5)
      food.effect('minecraft:speed', 300, 0, 1.0)
    }
  })
})