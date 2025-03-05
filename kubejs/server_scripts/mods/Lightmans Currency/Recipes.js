// All recipe modifications to Lightmans Currency
// Modified by NightEarl015

ServerEvents.recipes(event => {
    const levels = [
        'copper', 'iron', 'gold', 'emerald', 'diamond', 'netherite', 'nether_star'
    ]; // Defining types

    const cointypes = [
         'coin', 'coinpile', 'coinblock'
    ]; // Defining cointypes

    const types = [
        'block', 'coin', 'pile'
   ]; // Defining types

    levels.forEach(level => {
        cointypes.forEach(cointype => {
            types.forEach(type => {
                event.remove({output: `lightmanscurrency:wallet_${level}`}),
                event.remove({output: 'lctech:battery'}),
                event.remove({output: 'lctech:battery_large'})
                event.remove({type: 'lightmanscurrency:coin_mint'})
                event.remove({id: 'lightmanscurrency:coin_mint'})
                event.remove({id: `lightmanscurrency:${cointype}_${level}_from_${type}`})
                event.remove({id: `lightmanscurrency:wallet/upgrade_wallet_${level}_to_wallet_nether_star`})
            });
        });            
    });

    /*
    e.replaceInput([
        {id: "lightmanscurrency:item_trader_interface"},
        {id: "lctech:fluid_trader_interface"},
        {id: "lctech:energy_trader_interface"}
    ], "minecraft:iron_ingot", "createutilities:void_steel_ingot")
    e.replaceInput({}, "lctech:battery", "createaddition:modular_accumulator")
    */
})