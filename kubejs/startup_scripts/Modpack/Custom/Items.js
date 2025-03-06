// Customized items 
// Created by NightEarl015

StartupEvents.registry("item", event=>{

    event.create('copper_coin')
    .displayName('Copper Coin')
    .maxStackSize(64)
    .tag('fts:copper_coin')

    event.create('industrial_salt')
    .displayName('Industrial Salt')
    .maxStackSize(64)
    .tag('fts:industrial_salt')
    .tag('forge:industrial_salt')
    .tag('forge:dusts')
    .tag('forge:dusts/industrial_salt')
    .tag('minecolonies:reduceable_ingredient')
    .tag('mekanism:salt')
    .tag('mekanism:industrial_salt')
    .tag('supplementaries:hourglass_dusts')
        

    event.create('large_wood_gear')
    .displayName('Large Wood Gear')
    .maxStackSize(64)
    .tag('fts:large_wood_gear')

    event.create('small_wood_gear')
    .displayName('Small Wood Gear')
    .maxStackSize(64)
    .tag('fts:small_wood_gear')
})
