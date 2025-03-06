// All tweaks to Miner's Delight
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
    const squids = [
        'squid', 'glow_squid'
    ]; // Defining squids
    squids.forEach(squid => {
        // Disabled squid loottable
        events.addJson(`miners_delight:/loot_tables/loot_modifiers/scavenging_${squid}`, {
            type: "farmersdelight:add_item",
            item: [],
        })
        events.addJson(`miners_delight:/loot_tables/loot_modifiers/fishing_${squid}`, {
            type: "miners_delight:replace_items",
            item: [],
        })
    }); 
})
  