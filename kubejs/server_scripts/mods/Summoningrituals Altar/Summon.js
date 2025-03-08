// All summon modifications to Summoningrituals Altar
// Modified by NightEarl015

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('minecraft:wither_rose')
    .mobOutput(
        SummoningOutput.mob('wither')
            .count(1)
            .offset(2, 15, 2)
            .spread(4, 0, 4)
            .data({ Health: 400, Attributes: [
                { Name: 'generic.max_health', Base: 400 },
                { Name: 'armor', Base: 50 },
            ] 
        })
    )
    .input('3x minecraft:wither_skeleton_skull')
    .input('4x minecraft:soul_sand')
    .recipeTime(200)
})   