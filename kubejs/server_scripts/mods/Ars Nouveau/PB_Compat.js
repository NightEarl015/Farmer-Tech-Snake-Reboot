// FFB Compatible from Ars Nouveau
// Authored by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  event.remove({id: `productivebees:centrifuge/ars_nouveau/honeycomb_arcane`})
  event.remove({id: `productivebees:create/mixing/ars_nouveau/honeycomb_arcane`})

  // Rewrited recipes
  event.custom(
    {
      type: "create:mixing",
      ingredients: [
        {
          type: "forge:nbt",
          item: "productivebees:configurable_honeycomb",
          nbt: {
            EntityTag: {
              type: "productivebees:arcane"
            }
          }
        }
      ],
      results: [
        {
          item: "ars_nouveau:source_gem",
          chance: 0.5
        },
        {
          fluid: "productivebees:honey",
          amount: 50
        }
      ],
      heatRequirement: "heated",
      conditions: [
        {
          type: "forge:mod_loaded",
          modid: "create"
        },
        {
          type: "forge:mod_loaded",
          modid: "ars_nouveau"
        }
      ]
    }
  ).id('kubejs:productivebees/create/mixing/ars_nouveau/honeycomb_arcane')

  modCentrifugeRecipes(event, "productivebees:arcane", [
    {item: {tag: "forge:gems/source"}, chance: 50},
    {item: {tag: "forge:wax"}},
    {fluid: {fluid: "the_bumblezone:honey_fluid_still"}, amount: 50}
  ], "ars_nouveau")
})