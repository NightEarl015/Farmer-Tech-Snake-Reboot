// Customized items 
// Created by NightEarl015
StartupEvents.registry('block', event => {
    event.create('block_industrial_salt') 
    .texture('kubejs:block/block_industrial_salt')
    .displayName('Industrial Salt Block') 
    .soundType('sand') 
    .hardness(0.5) 
    .resistance(1.0) 
    .tagBlock('mekanism:block_industrial_salt',
        '#minecraft:axolotls_spawnable_on'
        '#minecraft:sculk_replaceable_world_gen',
        '#minecraft:mineable/shovel',
        '#minecraft:sculk_replaceable',
        '#computercraft:turtle_shovel_harvestable',
        '#immersiveengineering:mineable/drill',
        '#artifacts:mineable/digging_claws',
    ) 
    .requiresTool(true) 
    .tagBlock() 
})
