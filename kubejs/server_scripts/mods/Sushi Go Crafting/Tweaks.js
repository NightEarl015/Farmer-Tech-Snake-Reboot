// All tweaks to Sushi Go Crafting
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
    // Disabled cucumber loottable
    events.addJson('sushigocrafting:/loot_tables/blocks/cucumber_crop', {
    type: 'minecraft:block',
    functions: [
        {function: 'minecraft:explosion_decay'},
    ],
        pools: []
    })
}); 
