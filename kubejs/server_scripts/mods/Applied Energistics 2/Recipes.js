// All recipe modifications to Applied Energistics 2
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes

  // Rewrited Recipes
  event.shaped('9x ae2:sky_stone_block',
    [
      'OMO',
      'MOM', 
      'OMO'
    ],
    {
      O: 'ad_astra:moon_stone',
      M: 'ad_astra:mars_stone'
    }
  ).id('kubejs:appliedenergistics2/sky_stone')
})