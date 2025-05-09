// Customized items 
// Created by NightEarl015

StartupEvents.registry("item", event=>{

  event.create('copper_coin')
  .displayName('Copper Coin')
  .maxStackSize(64)
  .tag('fts:copper_coin')

  event.create('industrial_salt')
  .displayName('Industrial Salt')
  .maxStackSize(64)
  .tag('fts:industrial_salt')
  .tag('forge:industrial_salt')
  .tag('forge:dusts')
  .tag('forge:dusts/industrial_salt')
  .tag('minecolonies:reduceable_ingredient')
  .tag('mekanism:salt')
  .tag('mekanism:industrial_salt')
  .tag('supplementaries:hourglass_dusts')
      

  event.create('large_wood_gear')
  .displayName('Large Wood Gear')
  .maxStackSize(64)
  .tag('fts:large_wood_gear')

  event.create('small_wood_gear')
  .displayName('Small Wood Gear')
  .maxStackSize(64)
  .tag('fts:small_wood_gear')

  event.create('modpack_icon')
  .displayName('Farmer & Tech Snake: Reboot')
  .maxStackSize(1)

  event.create('number_0')
  .displayName('Number 0')
  .maxStackSize(64)
  event.create('number_1')
  .displayName('Number 1')
  .maxStackSize(64)
  event.create('number_2')
  .displayName('Number 2')
  .maxStackSize(64)
  event.create('number_3')
  .displayName('Number 3')
  .maxStackSize(64)
  event.create('number_4')
  .displayName('Number 4')
  .maxStackSize(64)
  event.create('number_5')
  .displayName('Number 5')
  .maxStackSize(64)
  event.create('number_6')
  .displayName('Number 6')
  .maxStackSize(64)
  event.create('number_7')
  .displayName('Number 7')
  .maxStackSize(64)
  event.create('number_8')
  .displayName('Number 8')
  .maxStackSize(64)
  event.create('number_9')
  .displayName('Number 9')
  .maxStackSize(64)

  event.create('uncoded_precision_mechanism')
  .displayName('Uncoded Precision Mechanism')
  .maxStackSize(64)

  event.create('incomplete_uncoded_precision_mechanism')
  .displayName('Incomplete Uncoded Precision Mechanism')

  event.create('incomplete_printed_energy_processor')
  .displayName('Incomplete Printed Energy Circuit')
  event.create('incomplete_energy_processor')
  .displayName('Incomplete Energy Processor')

  event.create('incomplete_printed_accumulation_processor')
  .displayName('Incomplete Printed Accumulation Processor')
  event.create('incomplete_accumulation_processor')
  .displayName('Incomplete Accumulation Processor')


  event.create('incomplete_printed_quantum_processor')
  .displayName('Incomplete Printed Quantum Processor')
  event.create('incomplete_quantum_processor')
  .displayName('Incomplete Quantum Processor')

})
