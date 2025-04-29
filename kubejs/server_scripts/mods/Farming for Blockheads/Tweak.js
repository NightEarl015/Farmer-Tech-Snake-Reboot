// All tweaks to Farming for Blockheads
// Tweaked by NightEarl015

let vanillaSeeds = [
  {
    "output": "minecraft:wheat_seeds"
  },
  {
    "output": "minecraft:melon_seeds"
  },
  {
    "output": "minecraft:pumpkin_seeds"
  },
  {
    "output": "minecraft:beetroot_seeds"
  },
  {
    "output": "minecraft:potato"
  },
  {
    "output": "minecraft:carrot"
  },
  {
    "output": "minecraft:sugar_cane"
  },
  {
    "output": "minecraft:cactus"
  },
  {
    "output": "minecraft:cocoa_beans"
  },
  {
    "output": "minecraft:torchflower_seeds"
  },
  {
    "output": "minecraft:pitcher_pod"
  },
  {
    "output": "minecraft:glow_berries"
  },
  {
    "output": "minecraft:sweet_berries"
  },
  {
    "output": "minecraft:nether_wart"
  },
  {
    "output": "minecraft:kelp"
  }
];

let vanillaSaplings = [
  {
    "output": "minecraft:oak_sapling"
  },
  {
    "output": "minecraft:spruce_sapling"
  },
  {
    "output": "minecraft:birch_sapling"
  },
  {
    "output": "minecraft:jungle_sapling"
  },
  {
    "output": "minecraft:acacia_sapling"
  },
  {
    "output": "minecraft:dark_oak_sapling"
  },
  {
    "output": "minecraft:cherry_sapling"
  },
  {
    "output": "minecraft:azalea",
    "payment": {
      "item": "alexis_64_coins:copper_coin",
      "count": 4
    }
  },
  {
    "output": "minecraft:flowering_azalea",
    "payment": {
      "item": "alexis_64_coins:copper_coin",
      "count": 4
    }
  },
  {
    "output": "minecraft:mangrove_propagule",
    "payment": {
      "item": "alexis_64_coins:copper_coin",
      "count": 4
    }
  }
];

let vanillaFlowers =[
  {
    "output": "minecraft:dandelion"
  },
  {
    "output": "minecraft:poppy"
  },
  {
    "output": "minecraft:blue_orchid"
  },
  {
    "output": "minecraft:allium"
  },
  {
    "output": "minecraft:azure_bluet"
  },
  {
    "output": "minecraft:red_tulip"
  },
  {
    "output": "minecraft:orange_tulip"
  },
  {
    "output": "minecraft:white_tulip"
  },
  {
    "output": "minecraft:pink_tulip"
  },
  {
    "output": "minecraft:oxeye_daisy"
  },
  {
    "output": "minecraft:cornflower"
  },
  {
    "output": "minecraft:lily_of_the_valley"
  }
];

ServerEvents.lowPriorityData(events => {
  events.addJson('farmingforblockheads:farmingforblockheads_compat/vanilla_seeds', {
    modId: "minecraft",
    group: {
      name: "Vanilla Seeds",
      enabledByDefault: true,
      defaultPayment: {
        item: "alexis_64_coins:copper_coin"
      },
      defaultCategory: "farmingforblockheads:seeds"
    },
    customEntries: vanillaSeeds,
  })
  events.addJson('farmingforblockheads:farmingforblockheads_compat/vanilla_saplings', {
    modId: "minecraft",
    group: {
      name: "Vanilla Saplings",
      enabledByDefault: true,
      defaultPayment: {
        item: "alexis_64_coins:copper_coin"
      },
      defaultCategory: "farmingforblockheads:saplings"
    },
    customEntries: vanillaSaplings,
  })
  events.addJson('farmingforblockheads:farmingforblockheads_compat/vanilla_flowers', {
    modId: "minecraft",
    group: {
      name: "Vanilla Flowers",
      enabledByDefault: true,
      defaultPayment: {
        item: "alexis_64_coins:copper_coin"
      },
      defaultCategory: "farmingforblockheads:flowers"
    },
    customEntries: vanillaFlowers,
  })
})
