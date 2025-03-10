// All tweaks to Farming for Blockheads
// Tweaked by NightEarl015

let config = JsonIO.read('kubejs/config/myawesomeconfig.json')

function Market(source) {
    let saplings = {}
    let seeds = {}
    let flowers = {}
    let taggedSeeds = Ingredient.of('#forge:seeds').stacks
    taggedSeeds.forEach(seed => {
        let mod = seed.idLocation.namespace
        if (seeds[mod] == null) {
            seeds[mod] = []
        }
        seeds[mod].push(seed.id)
    })
    let taggedSaplings = Ingredient.of('#minecraft:saplings').stacks
    taggedSaplings.forEach(sapling => {
        let mod = sapling.idLocation.namespace
        if (saplings[mod] == null) {
            saplings[mod] = []
        }
    saplings[mod].push(sapling.id)
    })
    let taggedFlowers = Ingredient.of('#minecraft:flowers').stacks
    taggedFlowers.forEach(flower => {
        let mod = flower.idLocation.namespace
        if (mod == 'botania') {
        if (!flower.id.contains('mystical_flower')) {
    return
        }
        }
        if (flowers[mod] == null) {
            flowers[mod] = []
        }
        flowers[mod].push(flower.id)
    })
    JsonIO.write('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json', { saplings: saplings, seeds: seeds, flowers: flowers })
    return 1
  }


JsonIO.write('kubejs/config/myawesomeconfig.json', {settings: 'creeper', weirdblock: 'minecraft:end_gateway'})