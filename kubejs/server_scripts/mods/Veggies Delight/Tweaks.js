// All tweaks to Veggies Delight
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
  const disabledveggiesdelightfeatures = [
    'patch_wild_bellpeppers',
    'vd_village_desert_house',
    'vd_village_plains_house',
    'vd_village_savanna_house',
    'vd_village_snowy_house',
    'vd_village_taiga_house'
  ]
  disabledveggiesdelightfeatures.forEach(disabledveggiesdelightfeature => {
    events.addJson(`veggiesdelight:worldgen/placed_feature/${disabledveggiesdelightfeature}`, {
      feature: "veggiesdelight:patch_wild_bellpeppers",
      placement: [],
    });
    events.addJson(`veggiesdelight:loot_tables/chests/${disabledveggiesdelightfeature}`, {
      pools: [] 
    })
  }) 
})