// FFB Compatible from Biomes O' Plenty
// Authored by NightEarl015

let bopSaplings = [
  {
    "output": {
      "item": "biomesoplenty:origin_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:flowering_oak_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:rainbow_birch_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:yellow_maple_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:orange_autumn_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:maple_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:fir_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:redwood_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:mahogany_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:jacaranda_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:palm_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:willow_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:dead_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:magic_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:umbran_sapling"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:hellbark_sapling"
    }
  }
];

let bopFlowers = [
  {
    "output": {
      "item": "biomesoplenty:rose"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:violet"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:lavender"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:wildflower"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:orange_cosmos"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:pink_daffodil"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:pink_hibiscus"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:glowflower"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:wilted_lily"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:burning_blossom"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:tall_lavender"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:blue_hydrangea"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:goldenrod"
    }
  },
  {
    "output": {
      "item": "biomesoplenty:icy_iris"
    }
  }
];

ServerEvents.highPriorityData(events => {
  events.addJson('farmingforblockheads:farmingforblockheads_compat/biomesoplenty_saplings', {
    modId: "biomesoplenty",
    group: {
      name: "BiomesOPlenty Saplings",
      enabledByDefault: true,
      defaultPayment: {
        item: "kubejs:copper_coin"
      },
      defaultCategory: "farmingforblockheads:saplings"
    },
    customEntries: bopSaplings,
  })
  events.addJson('farmingforblockheads:farmingforblockheads_compat/braziliandelight_saplings', {
    modId: "biomesoplenty",
    group: {
      name: "BiomesOPlenty Flowers",
      enabledByDefault: true,
      defaultPayment: {
        item: "kubejs:copper_coin"
      },
      defaultCategory: "farmingforblockheads:flowers"
    },
    customEntries: bopFlowers,
  })
})