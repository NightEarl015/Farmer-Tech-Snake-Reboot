// All tag modifications to Sushi Go Crafting
// Modified by NightEarl015

ServerEvents.tags('item', event => {
    event.remove('forge:crops/cucumber', 'sushigocrafting:cucumber', )
    event.add('salt:can_be_salted', 'sushigocrafting:cucumber_slices', )
})