// All recipe modifications to Summoningrituals Altar
// Modified by NightEarl015

ServerEvents.recipes(event => {

    event.shaped('summoningrituals:altar',
    [
        "CPH",
        " W ",
        "PPP"
    ],
    {
        C: "#minecraft:candles",
        P: "#minecraft:planks",
        H: "minecraft:wither_skeleton_skull",
        W: "#minecraft:logs"
    }
    ).id('kubejs:summoningritualsaltar/crafting/altar')
})