// All tweaks to Ad Astra: Mekanism Ores
// Tweaked by NightEarl015

ServerEvents.highPriorityData(event => {
  let editplanetMekOreGen = (planet, oreName, ore) => {
    let planetMekOreJson = JsonIO.toObject(
      {
        "type": "minecraft:block",
        "pools": [
          {
            "bonus_rolls": 0.0,
            "entries": [
              {
                "type": "minecraft:alternatives",
                "children": [
                  {
                    "type": "minecraft:item",
                    "conditions": [
                      {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                          "enchantments": [
                            {
                              "enchantment": "minecraft:silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "name": `mekanismaaa:${planet}_${oreName}`
                  },
                  {
                    "type": "minecraft:item",
                    "functions": [
                      {
                        "enchantment": "minecraft:fortune",
                        "formula": "minecraft:ore_drops",
                        "function": "minecraft:apply_bonus"
                      },
                      {
                        "function": "minecraft:explosion_decay"
                      }
                    ],
                    "name": ore
                  }
                ]
              }
            ],
            "rolls": 1.0
          }
        ],
        "random_sequence": `mekanismaaa:blocks/${planet}_${oreName}`
      }
    )
    event.addJson(`mekanismaaa:loot_tables/blocks/${planet}_${oreName}`, planetMekOreJson)
  }
  editplanetMekOreGen('glacio','lead_ore', "alltheores:raw_lead")
  editplanetMekOreGen('glacio',"osmium_ore", "alltheores:raw_osmium")
  editplanetMekOreGen('glacio',"tin_ore", "alltheores:raw_tin")
  editplanetMekOreGen('glacio',"uranium_ore", "alltheores:raw_uranium")
  editplanetMekOreGen('mars',"tin_ore", "alltheores:raw_tin")
  editplanetMekOreGen('mars',"uranium_ore", "alltheores:raw_uranium")
  editplanetMekOreGen('mercury','lead_ore', "alltheores:raw_lead")
  editplanetMekOreGen('mercury',"osmium_ore", "alltheores:raw_osmium")
  editplanetMekOreGen('mercury',"uranium_ore", "alltheores:raw_uranium")
  editplanetMekOreGen('moon',"osmium_ore", "alltheores:raw_osmium")
  editplanetMekOreGen('moon',"tin_ore", "alltheores:raw_tin")
  editplanetMekOreGen('venus',"lead_ore", "alltheores:raw_lead")
  editplanetMekOreGen('venus',"uranium_ore", "alltheores:raw_uranium")
})
