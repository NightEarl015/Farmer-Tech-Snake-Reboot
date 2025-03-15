// All tweaks to Cultural Delight
// Tweaked by NightEarl015

/*
ServerEvents.highPriorityData(event => {
  let addSquid = (id, squid, type) => {
    let squidJson = JsonIO.toObject(
      {
        "type": "farmersdelight:add_item",
        "conditions": [
          {
            "condition": "minecraft:entity_properties",
            "entity": "killer",
            "predicate": {
              "equipment": {
                "mainhand": {
                  "tag": "farmersdelight:tools/knives"
                }
              }
            }
          },
          {
            "condition": "minecraft:entity_properties",
            "entity": "this",
            "predicate": {
              "type": type
            }
          }
        ],
        "item": squid,
        "count" : 1
      }
    )
    event.addJson(`farmersdelight:loot_modifiers/scavenging_${id}`, squidJson)
  }
  addSquid('squid',"culturaldelights:squid", "minecraft:squid")
  addSquid('glow_squid',"culturaldelights:glow_squid", "minecraft:glow_squid")
})
*/