// Customized items 
// Created by NightEarl015

StartupEvents.registry("item", event=>{

    event.create('copper_coin')
    .texture('kubejs:item/copper_coin')
    .displayName('Copper Coin')
    .maxStackSize(64)
    .tag('fts:copper_coin')

    event.create('industrial_salt')
    .texture('kubejs:item/industrial_salt')
    .displayName('Industrial Salt')
    .maxStackSize(64)
    .tag('fts:industrial_salt',
        '#forge:industrial_salt',
        '#forge:dusts',
        '#forge:dusts/industrial_salt',
        '#minecolonies:reduceable_ingredient',
        '#mekanism:industrial_salt',
        '#supplementaries:hourglass_dusts'
    )

    event.create('large_wood_gear')
    .texture('kubejs:item/large_wood_gear')
    .displayName('Large Wood Gear')
    .maxStackSize(64)
    .tag('fts:large_wood_gear')

    event.create('small_wood_gear')
    .texture('kubejs:item/small_wood_gear')
    .displayName('Small Wood Gear')
    .maxStackSize(64)
    .tag('fts:small_wood_gear')
})
