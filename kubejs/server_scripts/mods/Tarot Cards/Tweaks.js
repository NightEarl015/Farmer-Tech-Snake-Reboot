// All tweaks to Tarot Cards
// Tweaked by NightEarl015

ServerEvents.highPriorityData(events => {
    events.addJson('tarotcards:loot_modifiers/tarot_loot_modifier', {
        type: "tarotcards:loot_additions",
        items: []
    })   
})
