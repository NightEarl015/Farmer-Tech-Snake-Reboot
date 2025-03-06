// Customized items 
// Created by NightEarl015
StartupEvents.registry('block', event => {
    event.create('block_industrial_salt') 
    .displayName('Industrial Salt Block') 
    .soundType('sand') 
    .hardness(0.5) 
    .resistance(1.0)
    .requiresTool(true) 
    .tagBlock('mekanism:block_industrial_salt')
    .tagBlock('minecraft:axolotls_spawnable_on')
    .tagBlock('minecraft:sculk_replaceable_world_gen')
    .tagBlock('minecraft:mineable/shovel')
    .tagBlock('minecraft:sculk_replaceable')
    .tagBlock('computercraft:turtle_shovel_harvestable')
    .tagBlock('immersiveengineering:mineable/drill')
    .tagBlock('artifacts:mineable/digging_claws')
})
