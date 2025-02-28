// All tweaks to Mekanism
// Tweaked by NightEarl015

ServerEvents.tags('item', event => {
    event.remove('forge:salt', 'mekanism:salt')
    event.add('forge:industrial_salt', 'mekanism:salt')
    event.add('mekanism:industrial_salt', 'mekanism:salt')

    event.replaceInput(
        { mod: 'mekanism' }, 
        '#forge:salt',            
        '#mekanism:industrial_salt' 
    )
})