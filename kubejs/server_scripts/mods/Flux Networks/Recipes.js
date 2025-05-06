// All recipe modifications to Flux Networks
// Modified by NightEarl015

ServerEvents.recipes(event => {
    event.recipes.create.mixing('fluxnetworks:flux_dust', [Fluid.lava(500), 'fluxnetworks:flux_dust', 'mekanism:dust_obsidian', 'minecraft:redstone']).id('fluxnetworks:flux_dust_mixing')
})