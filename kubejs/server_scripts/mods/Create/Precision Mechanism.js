// Test

const seed = '637265617465'; // Converting the character 'create' to hexadecimal

let code_json = JsonIO.read('kubejs/server_scripts/mods/create/precision_mechanism_passcode.json');
let randomNumbers;

const getRandomFromSeed = () => seed[Math.floor(Math.random() * seed.length)];

if (code_json === null) {
  randomNumbers = [];
  for (let i = 0; i < 6; i++) {
    randomNumbers.push(getRandomFromSeed());
  }
  code_json = { code: randomNumbers };
  JsonIO.write('kubejs/server_scripts/mods/create/precision_mechanism_passcode.json', code_json);
} else {
  randomNumbers = code_json.code;
}

const numberMappings = randomNumbers.map(num => `kubejs:number_${num}`);

ServerEvents.recipes(event => {
  
  event.recipes.createSequencedAssembly(
    [
      Item.of('create:precision_mechanism').withChance(0.6),
      Item.of('minecraft:dead_bush').withChance(0.4),
    ],
    'kubejs:uncoded_precision_mechanism',
    [
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[0]]),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[1]]),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[2]]),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[3]]),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[4]]),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', numberMappings[5]]),
    ]
  )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(1)
    .id('kubejs:create/sequenced_assembly/precision_mechanism');
});

