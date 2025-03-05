// All tweaks to Lightmans Currency
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {

    // Defining Parts
    const locations = [
        'desert', 'plains', 'taiga', 'idas_taiga'
    ]; // Defining locations

    const buildings = [
        'bank', 'banker', 'large_bank', 'large_bank_vault', 'shop', 'ruins'
    ]; // Defining buildings

    const types = [
        'boss', 'chest', 'entity'
    ]; // Defining types

    const tiers = [
        'tier1', 'tier2', 'tier3', 'tier4', 'tier5',  'tier6'
    ]; // Defining tiers

    // Similar loottable datapacks
    locations.forEach(location => {
        buildings.forEach(building => {
            types.forEach(type => {
                tiers.forEach(tier => {
                    events.addJson(`lightmanscurrency:loot_tables/archaeology/village/${location}_${building}`, {
                        type: "minecraft:archaeology",
                        pools: [],
                        random_sequence: `lightmanscurrency:archaeology/village/${location}_${building}`
                    })

                    events.addJson(`lightmanscurrency:loot_tables/chest/village/${location}_${building}`, {
                        type: "minecraft:archaeology",
                        pools: [],
                        random_sequence: `lightmanscurrency:chest/village/${location}_${building}`
                    })

                    events.addJson(`lightmanscurrency:loot_tables/loot_addons/${type}/${tier}`, {
                        type: "minecraft:empty",
                        pools: [],
                        random_sequence: `lightmanscurrency:loot_addons/${type}/${tier}`  
                    })

                    events.addJson(`lightmanscurrency:worldgen/processor_list/${location}_${building}_archaeology`, {
                        processors: []  
                    })
                });
            });
        });
    });

    // Unique lootable datapack
    events.addJson('lightmanscurrency:loot_tables/chest/ancient_city/ancient_ruins', {
        type: "minecraft:archaeology",
        pools: [],
        random_sequence: "lightmanscurrency:chest/ancient_city/ancient_ruins"
    })
    events.addJson('lightmanscurrency:loot_tables/misc/ancient_netherite_coins', {
        type: "minecraft:archaeology",
        pools: [],
        random_sequence: "lightmanscurrency:misc/ancient_netherite_coins" 
    })
    events.addJson('lightmanscurrency:worldgen/processor_list/ancient_ruins', {
        processors: []
    })
    events.addJson('lightmanscurrency:worldgen/processor_list/das_taiga_large_bank', {
        processors: []
    })
})