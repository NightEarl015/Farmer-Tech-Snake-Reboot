// All recipe modifications to ExtendedAE
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    const types = [
        'water', 'lava', 'cobblestone'
    ]; // Defining types
    types.forEach(type => {
        event.remove({id: `expatternprovider:${type}_cell`})
    });
    // Rewrited recipes
    // Inf Water cell
    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        [
            'UIU',
            'IOI', 
            'PYP'
        ],
        {
            I: 'minecraft:water_bucket',
            P: 'minecraft:netherite_ingot',
            O: 'megacells:cell_component_256m',
            U: 'ae2:quartz_glass',
            Y: 'minecraft:nether_star'
        }
    ).id('kubejs:expatternprovider/water_cell')

    // Inf lava cell
    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        [
            'UIU',
            'IOI', 
            'PYP'
        ],
        {
            I: 'minecraft:lava_bucket',
            P: 'minecraft:netherite_ingot',
            O: 'megacells:cell_component_256m',
            U: 'ae2:quartz_glass',
            Y: 'minecraft:nether_star'
        }
    ).id('kubejs:expatternprovider/lava_cell')

    // Inf cobblestone cell
    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        [
            'UIU',
            'TOT', 
            'PYP'
        ],
        {
            I: 'minecraft:lava_bucket',
            T: 'minecraft:water_bucket',
            P: 'minecraft:netherite_ingot',
            O: 'megacells:cell_component_256m',
            U: 'ae2:quartz_glass',
            Y: 'minecraft:nether_star'
        }
    ).id('kubejs:expatternprovider/cobblestone_cell')
})