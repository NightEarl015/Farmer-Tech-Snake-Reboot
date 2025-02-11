WorldgenEvents.add(event => {
  event.addOre((ore) => {
    ore.id = "kubejs:alltheores_lead_ore"
    ore.biomes = ['#jamd:mining']
    ore.addTarget('minecraft:stone', 'alltheores:lead_ore')
    ore.size(10)
    ore.count([15, 20])
    ore.squared()
    ore.uniformHeight(0, 63)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:alltheores_nickel_ore"
    ore.biomes = ['#jamd:mining']
    ore.addTarget('minecraft:stone', 'alltheores:nickel_ore')
    ore.size(10)
    ore.count([15, 20])
    ore.squared()
    ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_osmium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:osmium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_silver_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:silver_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })    
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_uranium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:uranium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 60)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_zinc_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:zinc_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:mysticalagriculture_inferium_ore"
      ore.biomes = ['jamd:mining']
      ore.addTarget('minecraft:stone', 'mysticalagriculture:inferium_ore')
      ore.size(5)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:mysticalagriculture_prosperity_ore"
      ore.biomes = ['jamd:mining']
      ore.addTarget('minecraft:stone', 'mysticalagriculture:prosperity_ore')
      ore.size(4)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
      event.addOre((ore) => {
      ore.id = "kubejs:create_new_age_thorium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'create_new_age:thorium_ore')
      ore.size(4)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:minecraft_ancient_debris"
    ore.biomes = ['#jamd:mining']
    ore.addTarget('minecraft:stone', 'minecraft:ancient_debris')
    ore.addTarget('minecraft:deepslate_stone', 'minecraft:ancient_debris')
    ore.size(2)
    ore.count([15, 20])
    ore.squared()
    ore.uniformHeight(-60, 63)
  })    
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_lead_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_lead_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_lead_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_nickel_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_nickel_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_nickel_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_osmium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:deepslate_osmium_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_osmium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_silver_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_silver_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_silver_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })    
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_uranium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_uranium_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_uranium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:alltheores_deepslate_zinc_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_zinc_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_zinc_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })  
    event.addOre((ore) => {
      ore.id = "kubejs:mysticalagriculture_deepslate_inferium_ore"
      ore.biomes = ['jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'mysticalagriculture:deepslate_inferium_ore')
      ore.addTarget('minecraft:tuff', 'mysticalagriculture:deepslate_inferium_ore')
      ore.size(5)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "kubejs:mysticalagriculture_deepslate_prosperity_ore"
      ore.biomes = ['jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'mysticalagriculture:deepslate_prosperity_ore')
      ore.addTarget('minecraft:tuff', 'mysticalagriculture:deepslate_prosperity_ore')
      ore.size(4)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
})
