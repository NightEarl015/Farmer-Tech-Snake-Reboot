// FFB Compatible from Brazilian Delight
// Authored by NightEarl015

let braziSeeds = [
  {
    output: "braziliandelight:garlic_bulb"
  },
  {
    output: "braziliandelight:black_beans"
  },
  {
    output: "braziliandelight:carioca_beans"
  },
  {
    output: "braziliandelight:collard_greens_seeds"
  },
  {
    output: "braziliandelight:coffee_beans"
  },
  {
    output: "braziliandelight:kernels"
  },
  {
    output: "braziliandelight:white_kernels"
  },
  {
    output: "braziliandelight:guarana_seeds"
  },
  {
    output: "braziliandelight:cassava_root"
  },
  {
    output: "braziliandelight:green_coconut"
  },
  {
    output: "braziliandelight:coconut"
  },
  {
    output: "braziliandelight:bean_pod"
  }
];

let braziSaplings = [
  {
    "output": "braziliandelight:lemon_sapling"
  },
  {
    "output": "braziliandelight:coconut_palm_sapling"
  },
  {
    "output": "braziliandelight:acai_palm_sapling"
  }
];

ServerEvents.highPriorityData(events => {
  events.addJson('farmingforblockheads:farmingforblockheads_compat/braziliandelight_seeds', {
    modId: "braziliandelight",
    group: {
      name: "Brazilian Delight Seeds",
      enabledByDefault: true,
      defaultPayment: {
        item: "kubejs:copper_coin"
      },
      defaultCategory: "farmingforblockheads:seeds"
    },
    customEntries: braziSeeds,
  })
  events.addJson('farmingforblockheads:farmingforblockheads_compat/braziliandelight_saplings', {
    modId: "braziliandelight",
    group: {
      name: "Brazilian Delight Saplings",
      enabledByDefault: true,
      defaultPayment: {
        item: "kubejs:copper_coin"
      },
      defaultCategory: "farmingforblockheads:saplings"
    },
    customEntries: braziSaplings,
  })
})