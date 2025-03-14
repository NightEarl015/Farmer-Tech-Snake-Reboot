// All recipe modifications to Mega Cells
// Modified by NightEarl015

ServerEvents.recipes(event => {
    event.recipes.create.compacting
    ('megacells:radioactive_cell_component', 
        [
        'megacells:cell_component_64m',
        'mekanism:radioactive_waste_barrel',
        'ae2:singularity'
        ]
    ).superheated()

    event.recipes.create.compacting
    ('megacells:bulk_cell_component', 
        [
        'megacells:cell_component_1m',
        'ae2:spatial_cell_component_2',
        'ae2:singularity'
        ]
    ).superheated()
})