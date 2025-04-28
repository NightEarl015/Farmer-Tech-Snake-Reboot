// Gems centrifuge recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees gems
  const gemsCentrifugeToRemove = [
    'agate', 'alexandrite', 'amber_gem', 'amethyst', 'ametrine', 'ammolite', 'apatite', 'aquamarine',
    'benitoite', 'black_diamond', 'black_opal',
    'carnelian', 'cats_eye', 'chrysoprase', 'cinnabar', 'cinnabar_dust', 'citrine', 'coral',
    'diamond',
    'emerald', 'euclase',
    'fluorite',
    'garnet', 'green_sapphire',
    'heliodor',
    'iolite',
    'jade', 'jasper',
    'kunzite', 'kyanite',
    'lapis', 'lepidolite',
    'malachite', 'moldavite', 'moonstone', 'morganite',
    'onyx', 'opal',
    'pearl', 'peridot', 'phosphophyllite', 'pyrope',
    'quartz',
    'rose_quartz', 'ruby',
    'sapphire', 'sodalite', 'spinel', 'sunstone',
    'tanzanite', 'tektite', 'topaz', 'tourmaline', 'turquoise',
    'white_diamond', 
    'zircon'
  ]; 

  // Removed recipes
  gemsCentrifugeToRemove.forEach(centrifugeToRemove =>{
    event.remove({id: `productivebees:centrifuge/gems/honeycomb_${centrifugeToRemove}`})
  })

  // Rewrited recipes
  // A
  customCentrifugeRecipes(event, "productivebees:agate",[
    {item: {tag: "forge:gems/agate"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/agate"}}])
  customCentrifugeRecipes(event, "productivebees:alexandrite",[
    {item: {tag: "forge:gems/alexandrite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/alexandrite"}}])
  customCentrifugeRecipes(event, "productivebees:amber_gem",[
    {item: {tag: "forge:gems/amber"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/amber"}}])
  customCentrifugeRecipes(event, "productivebees:amethyst",[
    {item: {item: "minecraft:amethyst_shard"}, chance: 30},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [])
  customCentrifugeRecipes(event, "productivebees:ametrine",[
    {item: {tag: "forge:gems/ametrine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/ametrine"}}])
  customCentrifugeRecipes(event, "productivebees:ammolite",[
    {item: {tag: "forge:gems/ammolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/ammolite"}}])
  customCentrifugeRecipes(event, "productivebees:apatite",[
    {item: {tag: "forge:gems/apatite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/apatite"}}])
  customCentrifugeRecipes(event, "productivebees:aquamarine",[
    {item: {tag: "forge:gems/aquamarine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/aquamarine"}}])

  // B
  customCentrifugeRecipes(event, "productivebees:black_diamond",[
    {item: {tag: "forge:gems/black_diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/black_diamond"}}])
  customCentrifugeRecipes(event, "productivebees:black_opal",[
    {item: {tag: "forge:gems/black_opal"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/black_opal"}}])
  customCentrifugeRecipes(event, "productivebees:benitoite",[
    {item: {tag: "forge:gems/benitoite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/benitoite"}}])

  // C
  customCentrifugeRecipes(event, "productivebees:cats_eye",[
    {item: {tag: "forge:gems/cats_eye"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/cats_eye"}}])
  customCentrifugeRecipes(event, "productivebees:chrysoprase",[
    {item: {tag: "forge:gems/chrysoprase"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/chrysoprase"}}])
  customCentrifugeRecipes(event, "productivebees:cinnabar",[
    {item: {tag: "forge:gems/cinnabar"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/cinnabar"}}])
  customCentrifugeRecipes(event, "productivebees:citrine",[
    {item: {tag: "forge:gems/citrine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/citrine"}}])
  customCentrifugeRecipes(event, "productivebees:coral",[
    {item: {tag: "forge:gems/coral"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/coral"}}])
  customCentrifugeRecipes(event, "productivebees:carnelian",[
    {item: {tag: "forge:gems/carnelian"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/carnelian"}}])

  // D
  customCentrifugeRecipes(event, "productivebees:diamond",[
    {item: {tag: "forge:gems/diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [])

  // E
  customCentrifugeRecipes(event, "productivebees:emerald",[
    {item: {tag: "forge:gems/emerald"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [])
  customCentrifugeRecipes(event, "productivebees:euclase",[
    {item: {tag: "forge:gems/euclase"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/euclase"}}])

  // F
  customCentrifugeRecipes(event, "productivebees:fluorite",[
    {item: {tag: "forge:gems/fluorite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/fluorite"}}])

  // G
  customCentrifugeRecipes(event, "productivebees:garnet",[
    {item: {tag: "forge:gems/garnet"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/garnet"}}])
  customCentrifugeRecipes(event, "productivebees:green_sapphire",[
    {item: {tag: "forge:gems/green_sapphire"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/green_sapphire"}}])

  // H
  customCentrifugeRecipes(event, "productivebees:heliodor",[
    {item: {tag: "forge:gems/heliodor"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/heliodor"}}])

  // I
  customCentrifugeRecipes(event, "productivebees:iolite",[
    {item: {tag: "forge:gems/iolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/iolite"}}])

  // J
  customCentrifugeRecipes(event, "productivebees:jade",[
    {item: {tag: "forge:gems/jade"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/jade"}}])
  customCentrifugeRecipes(event, "productivebees:jasper",[
    {item: {tag: "forge:gems/jasper"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/jasper"}}])

  // K
  customCentrifugeRecipes(event, "productivebees:kunzite",[
    {item: {tag: "forge:gems/kunzite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/kunzite"}}])
  customCentrifugeRecipes(event, "productivebees:kyanite",[
    {item: {tag: "forge:gems/kyanite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/kyanite"}}])

  // L
  customCentrifugeRecipes(event, "productivebees:lapis",[
    {item: {tag: "forge:gems/lapis"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [])
  customCentrifugeRecipes(event, "productivebees:lepidolite",[
    {item: {tag: "forge:gems/lepidolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/lepidolite"}}])

  // M
  customCentrifugeRecipes(event, "productivebees:malachite",[
    {item: {tag: "forge:gems/malachite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/malachite"}}])
  customCentrifugeRecipes(event, "productivebees:moldavite",[
    {item: {tag: "forge:gems/moldavite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/moldavite"}}])
  customCentrifugeRecipes(event, "productivebees:moonstone",[
    {item: {tag: "forge:gems/moonstone"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/moonstone"}}])
  customCentrifugeRecipes(event, "productivebees:morganite",[
    {item: {tag: "forge:gems/morganite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/morganite"}}])

  // O
  customCentrifugeRecipes(event, "productivebees:onyx",[
    {item: {tag: "forge:gems/onyx"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/onyx"}}])
  customCentrifugeRecipes(event, "productivebees:opal",[
    {item: {tag: "forge:gems/opal"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/opal"}}])

  // P
  customCentrifugeRecipes(event, "productivebees:pearl",[
    {item: {tag: "forge:gems/pearl"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/pearl"}}])
  customCentrifugeRecipes(event, "productivebees:peridot",[
    {item: {tag: "forge:gems/peridot"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/peridot"}}])
  customCentrifugeRecipes(event, "productivebees:phosphophyllite",[
    {item: {tag: "forge:gems/phosphophyllite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/phosphophyllite"}}])
  customCentrifugeRecipes(event, "productivebees:pyrope",[
    {item: {tag: "forge:gems/pyrope"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/pyrope"}}])

  // Q
  customCentrifugeRecipes(event, "productivebees:crystalline",[
    {item: {tag: "forge:gems/quartz"}, min: 1, max: 3, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/quartz"}}])

  // R
  customCentrifugeRecipes(event, "productivebees:rose_quartz", [
    { item: {item: "create:rose_quartz"}, min: 5, max: 7},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:mod_loaded", modid: "create"},
    {type: "productivebees:bee_exists", bee: "productivebees:rose_quartz"}])
  customCentrifugeRecipes(event, "productivebees:ruby",[
    {item: {tag: "forge:gems/ruby"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/ruby"}}])


  // S
  customCentrifugeRecipes(event, "productivebees:sapphire",[
    {item: {tag: "forge:gems/sapphire"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/sapphire"}}])
  customCentrifugeRecipes(event, "productivebees:sodalite",[
    {item: {tag: "forge:gems/sodalite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/sodalite"}}])
  customCentrifugeRecipes(event, "productivebees:spinel",[
    {item: {tag: "forge:gems/spinel"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/spinel"}}])
  customCentrifugeRecipes(event, "productivebees:sunstone",[
    {item: {tag: "forge:gems/sunstone"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/sunstone"}}])

  // T
  customCentrifugeRecipes(event, "productivebees:tanzanite",[
    {item: {tag: "forge:gems/tanzanite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/tanzanite"}}])
  customCentrifugeRecipes(event, "productivebees:tektite",[
    {item: {tag: "forge:gems/tektite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/tektite"}}])
  customCentrifugeRecipes(event, "productivebees:topaz",[
    {item: {tag: "forge:gems/topaz"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/topaz"}}])
  customCentrifugeRecipes(event, "productivebees:tourmaline",[
    {item: {tag: "forge:gems/tourmaline"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/tourmaline"}}])
  customCentrifugeRecipes(event, "productivebees:turquoise",[
    {item: {tag: "forge:gems/turquoise"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/turquoise"}}])

  // W
  customCentrifugeRecipes(event, "productivebees:white_diamond",[
    {item: {tag: "forge:gems/white_diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/white_diamond"}}])

  // Z
  customCentrifugeRecipes(event, "productivebees:zircon",[
    {item: {tag: "forge:gems/zircon"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], [{type: "forge:not", value: {type: "forge:tag_empty", tag: "forge:gems/zircon"}}])
















})