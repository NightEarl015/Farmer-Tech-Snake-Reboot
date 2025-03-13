// All tweaks to Brazilian Delight
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
  events.addJson('braziliandelight:worldgen/placed_feature/patch_wild_coffee_berries_placed', {
    feature: "braziliandelight:patch_wild_coffee_berries",
    placement: [],
  })
  events.addJson('braziliandelight:worldgen/placed_feature/patch_wild_garlic_placed', {
    feature: "braziliandelight:patch_wild_garlic",
    placement: [],
  })
})