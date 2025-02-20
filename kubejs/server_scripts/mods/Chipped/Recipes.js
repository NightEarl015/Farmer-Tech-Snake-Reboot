// All recipe modifications to Chipped
// Modified by NightEarl015

ServerEvents.recipes(event => {
    event.custom({
        type: 'chipped:tinkering_table',
        inputs: [
            { tag: 'minecraft:iron_bars'}, 
            { tag: 'chipped:iron_bars'}, 
            { tag: 'chipped:sea_lantern'}, 
            { tag: 'chipped:redstone_lamp'}, 
            { tag: 'chipped:redstone_block'}, 
            { tag: 'chipped:lantern'}, 
            { tag: 'chipped:soul_lantern'}, 
            { tag: 'chipped:special_lantern'},  
            { tag: 'chipped:special_soul_lantern'},
            { tag: 'chipped:redstone_torch'}
        ],
    })
})