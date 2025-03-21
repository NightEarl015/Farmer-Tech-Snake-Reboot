// All tweaks to Brazilian Delight
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {

  const DisabledBrazilianDelightPlacedfeatures = [
    'patch_wild_coffee_berries_placed',
    'patch_wild_garlic_placed',
    'patch_wild_corn_placed',
    'patch_wild_corn_placed',
    'coconut_palm_tree_placed'
  ];

  DisabledBrazilianDelightPlacedfeatures.forEach(DisabledBrazilianDelightPlacedfeature => {
    events.addJson(`braziliandelight:worldgen/placed_feature/${DisabledBrazilianDelightPlacedfeature}`, {
      feature: "braziliandelight:patch_wild_garlic",
      placement: [],
    })
  });
})