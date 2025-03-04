// Disable loot table System
// Authored by AllTheMods Staff

ServerEvents.generateData('after_mods', events => {

    let ids = JsonIO.read("kubejs/server_scripts/disable_loot_table_ids.json").ids

    for (let id of ids) {
        events.json(`${id}.json`,
            {
                "forge:conditions": [
                    {
                        "type": "forge:false"
                    }
                ]
            }
        )
    }
})