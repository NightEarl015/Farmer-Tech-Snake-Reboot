// All tweaks to Silent Gear
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
  events.addJson('silentgear:worldgen/placed_feature/wild_flax', {
    feature: "silentgear:wild_flax",
    placement: [],
  })
})