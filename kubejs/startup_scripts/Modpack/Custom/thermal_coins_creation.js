// Thermal Coins Creation
// Original by DragonMaster & Reveter
// Modified by NightEarl015


ItemEvents.modelProperties(event => {
		event.register('kubejs:thermal_coin', 'count', (item, level, entity, seed) => {
		return item.count / item.maxStackSize
	})
})

  

StartupEvents.registry('item', event => {
	event.create('thermal_coin').modelJson({
		"parent": "item/generated",
		"textures": {
		"layer0": "kubejs:item/thermal_coin_0"
		},
		"overrides": [
		{
			"predicate": {
			"kubejs:count": 0.00000
			},
			"model": "kubejs:item/thermal_coin_0"
		},
		{
			"predicate": {
			"kubejs:count":  0.03125
			},
			"model": "kubejs:item/thermal_coin_1"
		},
		{
			"predicate": {
			"kubejs:count": 0.25000
			},
			"model": "kubejs:item/thermal_coin_2"
		},
		{
			"predicate": {
			"kubejs:count": 0.50000
			},
			"model": "kubejs:item/thermal_coin_3"
		},
		{
			"predicate": {
			"kubejs:count": 1.00000
			},
			"model": "kubejs:item/thermal_coin_4"
		}
		]
	}).displayName('Thermal Coin')
})

