// Some Tweaks of immersive engineering
// Modified by NightEarl015

// Engineer Hammer Infinite Durability
ItemEvents.modification(event => {
  event.modify('immersiveengineering:hammer', item => {
    item.maxDamage = 0
  })
})