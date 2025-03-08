// All tag modifications to Create Diesel Generators
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({id: 'createdieselgenerators:crafting/asphalt_block'})

    // Rewrited recipes
    event.shaped('createdieselgenerators:asphalt_block',
        [
        "SSS",
        "SBG", 
        "GGG"
        ],
        {
            S: 'minecraft:sand',
            G: 'minecraft:gravel',
            B: 'thermal:crude_oil_bucket'
        }
    ).id("kubejs:createdieselgenerators/crafting/asphalt_block")
})