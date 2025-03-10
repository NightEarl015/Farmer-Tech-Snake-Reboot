// All recipe modifications to Brazilian Delight
// Modified by NightEarl015

ServerEvents.recipes(event => {
    // Removed recipes
    event.remove({output: 'braziliandelight:salt_bucket'})  

    // Rewrited recipes

    // Salt Bucket Uncraft
    event.shapeless('salt:salt',
        [
            'braziliandelight:salt_bucket'
        ],
    ).id('kubejs:braziliandelight/crafting_shapeless/salt_bucket_uncraft')

    // Salt Bucket Blasting
    event.blasting('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/blasting/salt_bucket_blasting')
    event.smelting('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/blasting/salt_bucket_smelting')
    event.smoking('kubejs:sea_salt_water_bucket', 'braziliandelight:salt_bucket').id('kubejs:braziliandelight/blasting/salt_bucket_smoking')

})
