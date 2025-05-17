// All recipe modifications to Create: Sabers
// Modified by NightEarl015

ServerEvents.recipes(event => {
  // Removed recipes
  const sabercolors = [
    'black', 'blue', 'lime', 'yellow', 'orange', 'red', 'pink', 'purple', 'white'
  ]; // Defining sabercolors

  const sabermaterials = [
    'brass', 'copper', 'zinc'
  ]; // Defining sabermaterials

  sabercolors.forEach(color => {
    sabermaterials.forEach(material => {
      event.remove({id: `create_sabers:${material}_saber`})
      event.remove({id: `create_sabers:${material}_saber_to_${color}`})
      event.remove({id: `create_sabers:double_${material}_saber`})
      event.remove({id: `create_sabers:double_${material}_saber_to_${color}`})
      event.remove({id: `create_sabers:double_${material}_saber_${color}_craft`})
    })
  });

  // Rewrited recipes
  function create_saber_maker(block, saber, crystal){
    event.recipes.create.mechanical_crafting(saber, [
      '  L  ',
      '  L  ',
      '  E  ',
      '  C  ',
      '  B  '
    ], {
      L: crystal,
      E: 'create:electron_tube',
      C: 'create:cogwheel',
      B: block,
    }).id(`create_sabers:${saber.split(":")[1]}`)
  }
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_galaxy', 'quark:black_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_blue', 'quark:blue_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_lime', 'quark:lime_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_yellow', 'quark:yellow_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_orange', 'quark:orange_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_red', 'quark:red_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_pink', 'quark:violet_corundum_cluster')
  create_saber_maker('create_compressed:brass_sheet_block', 'create_sabers:brass_saber_purple', 'quark:indigo_corundum_cluster')
  
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_black', 'quark:black_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_blue', 'quark:blue_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_lime', 'quark:lime_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_yellow', 'quark:yellow_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_orange', 'quark:orange_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_red', 'quark:red_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_pink', 'quark:violet_corundum_cluster')
  create_saber_maker('compressium:copper_1', 'create_sabers:copper_saber_purple', 'quark:indigo_corundum_cluster')

  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_black', 'quark:black_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_blue', 'quark:blue_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_lime', 'quark:lime_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_yellow', 'quark:yellow_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_orange', 'quark:orange_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_red', 'quark:red_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_pink', 'quark:violet_corundum_cluster')
  create_saber_maker('alltheores:zinc_block', 'create_sabers:zinc_saber_purple', 'quark:indigo_corundum_cluster')

  function create_double_saber_maker(doublesaber, saber){
    event.shaped(doublesaber,[
        ' S ',
        ' G ', 
        ' S '
      ],
      {
        G: 'create:super_glue',
        S: saber
      }
    ).id(`create_sabers:${doublesaber.split(":")[1]}`)
  }
  create_double_saber_maker('create_sabers:double_brass_saber_black', 'create_sabers:brass_saber_black')
  create_double_saber_maker('create_sabers:double_brass_saber_blue', 'create_sabers:brass_saber_blue')
  create_double_saber_maker('create_sabers:double_brass_saber_lime', 'create_sabers:brass_saber_lime')
  create_double_saber_maker('create_sabers:double_brass_saber_yellow', 'create_sabers:brass_saber_yellow')
  create_double_saber_maker('create_sabers:double_brass_saber_orange', 'create_sabers:brass_saber_orange')
  create_double_saber_maker('create_sabers:double_brass_saber_red', 'create_sabers:brass_saber_red')
  create_double_saber_maker('create_sabers:double_brass_saber_pink', 'create_sabers:brass_saber_pink')
  create_double_saber_maker('create_sabers:double_brass_saber_purple', 'create_sabers:brass_saber_purple')

  create_double_saber_maker('create_sabers:double_copper_saber_black', 'create_sabers:copper_saber_black')
  create_double_saber_maker('create_sabers:double_copper_saber_blue', 'create_sabers:copper_saber_blue')
  create_double_saber_maker('create_sabers:double_copper_saber_lime', 'create_sabers:copper_saber_lime')
  create_double_saber_maker('create_sabers:double_copper_saber_yellow', 'create_sabers:copper_saber_yellow')
  create_double_saber_maker('create_sabers:double_copper_saber_orange', 'create_sabers:copper_saber_orange')
  create_double_saber_maker('create_sabers:double_copper_saber_red', 'create_sabers:copper_saber_red')
  create_double_saber_maker('create_sabers:double_copper_saber_pink', 'create_sabers:copper_saber_pink')
  create_double_saber_maker('create_sabers:double_copper_saber_purple', 'create_sabers:copper_saber_purple')

  create_double_saber_maker('create_sabers:double_zinc_saber_black', 'create_sabers:zinc_saber_black')
  create_double_saber_maker('create_sabers:double_zinc_saber_blue', 'create_sabers:zinc_saber_blue')
  create_double_saber_maker('create_sabers:double_zinc_saber_lime', 'create_sabers:zinc_saber_lime')
  create_double_saber_maker('create_sabers:double_zinc_saber_yellow', 'create_sabers:zinc_saber_yellow')
  create_double_saber_maker('create_sabers:double_zinc_saber_orange', 'create_sabers:zinc_saber_orange')
  create_double_saber_maker('create_sabers:double_zinc_saber_red', 'create_sabers:zinc_saber_red')
  create_double_saber_maker('create_sabers:double_zinc_saber_pink', 'create_sabers:zinc_saber_pink')
  create_double_saber_maker('create_sabers:double_zinc_saber_purple', 'create_sabers:zinc_saber_purple')
  
  
  event.shaped('create_sabers:brass_saber_white',[
    ' S ',
    ' G ', 
    ' S '
  ],
  {
    G: 'create:super_glue',
    S: 'create_sabers:brass_saber_white'
  }
  ).id(`create_sabers:double_brass_saber`)
  

  event.recipes.create.mechanical_crafting('create_sabers:brass_saber_white', [
    '  L  ',
    '  L  ',
    '  E  ',
    '  C  ',
    '  B  '
  ], {
    L: 'quark:white_corundum_cluster',
    E: 'create:electron_tube',
    C: 'create:cogwheel',
    B: 'alltheores:brass_block'
  }).id('create_sabers:brass_saber')
})
