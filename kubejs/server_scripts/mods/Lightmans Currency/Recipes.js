// All recipe modifications to Lightmans Currency
// Modified by NightEarl015

ServerEvents.recipes(event => {
    const levels = [
        'copper', 'iron', 'gold', 'emerald', 'diamond', 'netherite', 'nether_star'
    ]; // Defining types

    const traders = [
        'item_trader', 'fluid_trader', 'energy_trader'
   ]; // Defining traders

    const cointypes = [
         'coin', 'coinpile', 'coinblock'
    ]; // Defining cointypes

    const types = [
        'block', 'coin', 'pile'
   ]; // Defining types

    levels.forEach(level => {
        cointypes.forEach(cointype => {
            types.forEach(type => {
                traders.forEach(trader => {
                    event.remove({output: `lightmanscurrency:wallet_${level}`}),
                    event.remove({output: 'lctech:battery'}),
                    event.remove({output: 'lctech:battery_large'})
                    event.remove({type: 'lightmanscurrency:coin_mint'})
                    event.remove({id: 'lightmanscurrency:coin_mint'})
                    event.remove({id: `lightmanscurrency:${cointype}_${level}_from_${type}`})
                    event.remove({id: `lightmanscurrency:wallet/upgrade_wallet_${level}_to_wallet_nether_star`})

                    event.replaceInput(
                        { id: `lightmanscurrency:${trader}_interface` }, 
                        'minecraft:iron_ingot',            
                        'createutilities:void_steel_ingot'
                    )

                    event.replaceInput(
                        { id: `lctech:${trader}_interface` }, 
                        'minecraft:iron_ingot',            
                        'createutilities:void_steel_ingot'
                    )

                    event.replaceInput(
                        {}, 
                        'lctech:battery',            
                        'createaddition:modular_accumulator'
                    )
                });
            });
        });            
    });
})