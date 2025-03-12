// All tweaks to ATO - Alltheores
// Tweaked by NightEarl015
/*global.modifiedOresGen = [
  {path: 'ore_aluminum', id:'kubejs:alltheores/aluminum_ore', min:-64, max:320, size:8, count:4,},
]
*/

/*
ServerEvents.lowPriorityData(events => {
  let modifiedOresGen = (path, id, min, max, size, count) => {
    let jsonPlaced = JsonIO.toObject({
      "feature": id,
      "placement": [
      {
        "type": "minecraft:count",
        "count": count
      },
      {
        "type": "minecraft:in_square"
      },
      {
        "height": {
          "min_inclusive": {
            "absolute": min
          },
          "max_inclusive": {
            "absolute": max
          },
          "type": "minecraft:trapezoid"
        },
        "type": "minecraft:height_range"
      },
      {
        "type": "minecraft:biome"
      }
    ]
  })
  let jsonConfigured = JsonIO.toObject({
    "type": "minecraft:ore",
    "config": {
      "size": size,
      "discard_chance_on_air_exposure": 0.0,
      "targets": []
    }
  })  
  }
    events.addJson(`allthemodium:worldgen/placed_feature/${path}_placed.json`, jsonPlaced)
    events.addJson(`allthemodium:worldgen/configured_feature/${path}.json`, jsonConfigured)   
});

global.miningDimOres.forEach(ore=>{
  modifiedOresGen(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces, ore.endStoneReplaces, ore.netherrackReplaces);
})
*/
