// All tweaks to Veggies Delight
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
  events.addJson('veggiesdelight:worldgen/placed_feature/patch_wild_bellpeppers', {
    feature: "veggiesdelight:patch_wild_bellpeppers",
    placement: [],
  })  
})