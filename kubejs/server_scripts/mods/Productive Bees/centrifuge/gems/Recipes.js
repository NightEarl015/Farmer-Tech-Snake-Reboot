// Gems recipe modifications to Productive Bees
// Modified by NightEarl015 

ServerEvents.recipes(event =>{
  // Defining Productive Bees gems
  const pbgemsToRemove = [
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
  pbgemsToRemove.forEach(gemsToRemove =>{
    event.remove({id: `productivebees:centrifuge/gems/honeycomb_${gemsToRemove}`})
  })

  // Rewrited recipes
  // A
  gemsCentrifugeRecipes(event, "productivebees:agate",[
    {item: {tag: "forge:gems/agate"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/agate")
  gemsCentrifugeRecipes(event, "productivebees:alexandrite",[
    {item: {tag: "forge:gems/alexandrite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/alexandrite")
  gemsCentrifugeRecipes(event, "productivebees:amber_gem",[
    {item: {tag: "forge:gems/amber"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/amber")
  gemsCentrifugeRecipes(event, "productivebees:amethyst",[
    {item: {item: "minecraft:amethyst_shard"}, chance: 30},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "minecraft:amethyst_shard")
  gemsCentrifugeRecipes(event, "productivebees:ametrine",[
    {item: {tag: "forge:gems/ametrine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/ametrine")
  gemsCentrifugeRecipes(event, "productivebees:ammolite",[
    {item: {tag: "forge:gems/ammolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/ammolite")
  gemsCentrifugeRecipes(event, "productivebees:apatite",[
    {item: {tag: "forge:gems/apatite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/apatite")
  gemsCentrifugeRecipes(event, "productivebees:aquamarine",[
    {item: {tag: "forge:gems/aquamarine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/aquamarine")

  // B
  gemsCentrifugeRecipes(event, "productivebees:black_diamond",[
    {item: {tag: "forge:gems/black_diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/black_diamond")
  gemsCentrifugeRecipes(event, "productivebees:black_opal",[
    {item: {tag: "forge:gems/black_opal"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/black_opal")
  gemsCentrifugeRecipes(event, "productivebees:benitoite",[
    {item: {tag: "forge:gems/benitoite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/benitoite")

  // C
  gemsCentrifugeRecipes(event, "productivebees:cats_eye",[
    {item: {tag: "forge:gems/cats_eye"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/cats_eye")
  gemsCentrifugeRecipes(event, "productivebees:chrysoprase",[
    {item: {tag: "forge:gems/chrysoprase"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/chrysoprase")
  gemsCentrifugeRecipes(event, "productivebees:cinnabar",[
    {item: {tag: "forge:gems/cinnabar"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/cinnabar")
  gemsCentrifugeRecipes(event, "productivebees:citrine",[
    {item: {tag: "forge:gems/citrine"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/citrine")
  gemsCentrifugeRecipes(event, "productivebees:coral",[
    {item: {tag: "forge:gems/coral"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/coral")
  gemsCentrifugeRecipes(event, "productivebees:carnelian",[
    {item: {tag: "forge:gems/carnelian"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/carnelian")

  // D
  gemsCentrifugeRecipes(event, "productivebees:diamond",[
    {item: {tag: "forge:gems/diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/diamond")

  // E
  gemsCentrifugeRecipes(event, "productivebees:emerald",[
    {item: {tag: "forge:gems/emerald"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/emerald")
  gemsCentrifugeRecipes(event, "productivebees:euclase",[
    {item: {tag: "forge:gems/euclase"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/euclase")

  // F
  gemsCentrifugeRecipes(event, "productivebees:fluorite",[
    {item: {tag: "forge:gems/fluorite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/fluorite")

  // G
  gemsCentrifugeRecipes(event, "productivebees:garnet",[
    {item: {tag: "forge:gems/garnet"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/garnet")
  gemsCentrifugeRecipes(event, "productivebees:green_sapphire",[
    {item: {tag: "forge:gems/green_sapphire"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/green_sapphire")

  // H
  gemsCentrifugeRecipes(event, "productivebees:heliodor",[
    {item: {tag: "forge:gems/heliodor"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/heliodor")

  // I
  gemsCentrifugeRecipes(event, "productivebees:iolite",[
    {item: {tag: "forge:gems/iolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/iolite")

  // J
  gemsCentrifugeRecipes(event, "productivebees:jade",[
    {item: {tag: "forge:gems/jade"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/jade")
  gemsCentrifugeRecipes(event, "productivebees:jasper",[
    {item: {tag: "forge:gems/jasper"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/jasper")

  // K
  gemsCentrifugeRecipes(event, "productivebees:kunzite",[
    {item: {tag: "forge:gems/kunzite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/kunzite")
  gemsCentrifugeRecipes(event, "productivebees:kyanite",[
    {item: {tag: "forge:gems/kyanite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/kyanite")

  // L
  gemsCentrifugeRecipes(event, "productivebees:lapis",[
    {item: {tag: "forge:gems/lapis"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/lapis")
  gemsCentrifugeRecipes(event, "productivebees:lepidolite",[
    {item: {tag: "forge:gems/lepidolite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/lepidolite")

  // M
  gemsCentrifugeRecipes(event, "productivebees:malachite",[
    {item: {tag: "forge:gems/malachite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/malachite")
  gemsCentrifugeRecipes(event, "productivebees:moldavite",[
    {item: {tag: "forge:gems/moldavite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/moldavite")
  gemsCentrifugeRecipes(event, "productivebees:moonstone",[
    {item: {tag: "forge:gems/moonstone"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/moonstone")
  gemsCentrifugeRecipes(event, "productivebees:morganite",[
    {item: {tag: "forge:gems/morganite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/morganite")

  // O
  gemsCentrifugeRecipes(event, "productivebees:onyx",[
    {item: {tag: "forge:gems/onyx"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/onyx")
  gemsCentrifugeRecipes(event, "productivebees:opal",[
    {item: {tag: "forge:gems/opal"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/opal")

  // P
  gemsCentrifugeRecipes(event, "productivebees:pearl",[
    {item: {tag: "forge:gems/pearl"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/pearl")
  gemsCentrifugeRecipes(event, "productivebees:peridot",[
    {item: {tag: "forge:gems/peridot"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/peridot")
  gemsCentrifugeRecipes(event, "productivebees:phosphophyllite",[
    {item: {tag: "forge:gems/phosphophyllite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/phosphophyllite")
  gemsCentrifugeRecipes(event, "productivebees:pyrope",[
    {item: {tag: "forge:gems/pyrope"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/pyrope")

  // Q
  gemsCentrifugeRecipes(event, "productivebees:crystalline",[
    {item: {tag: "forge:gems/quartz"}, min: 1, max: 3, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/quartz")

  // R
  modsCentrifugeRecipes(event, "productivebees:rose_quartz", [
    { item: {item: "create:rose_quartz"}, min: 5, max: 7},
    { item: {tag: "forge:wax"}},
    { fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "create");
  gemsCentrifugeRecipes(event, "productivebees:ruby",[
    {item: {tag: "forge:gems/ruby"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/ruby")


  // S
  gemsCentrifugeRecipes(event, "productivebees:sapphire",[
    {item: {tag: "forge:gems/sapphire"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/sapphire")
  gemsCentrifugeRecipes(event, "productivebees:sodalite",[
    {item: {tag: "forge:gems/sodalite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/sodalite")
  gemsCentrifugeRecipes(event, "productivebees:spinel",[
    {item: {tag: "forge:gems/spinel"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/spinel")
  gemsCentrifugeRecipes(event, "productivebees:sunstone",[
    {item: {tag: "forge:gems/sunstone"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/sunstone")

  // T
  gemsCentrifugeRecipes(event, "productivebees:tanzanite",[
    {item: {tag: "forge:gems/tanzanite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/tanzanite")
  gemsCentrifugeRecipes(event, "productivebees:tektite",[
    {item: {tag: "forge:gems/tektite"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/tektite")
  gemsCentrifugeRecipes(event, "productivebees:topaz",[
    {item: {tag: "forge:gems/topaz"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/topaz")
  gemsCentrifugeRecipes(event, "productivebees:tourmaline",[
    {item: {tag: "forge:gems/tourmaline"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/tourmaline")
  gemsCentrifugeRecipes(event, "productivebees:turquoise",[
    {item: {tag: "forge:gems/turquoise"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/turquoise")

  // W
  gemsCentrifugeRecipes(event, "productivebees:white_diamond",[
    {item: {tag: "forge:gems/white_diamond"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/white_diamond")

  // Z
  gemsCentrifugeRecipes(event, "productivebees:zircon",[
    {item: {tag: "forge:gems/zircon"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "forge:gems/zircon")
















})