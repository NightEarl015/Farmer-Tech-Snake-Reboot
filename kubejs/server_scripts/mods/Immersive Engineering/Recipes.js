// All recipe modifications to Immersive Engineering
// Modified by NightEarl015

ServerEvents.recipes(event => {
  const ores = [
    'aluminum', 'ardite', 'cobalt', 'copper', 'gold', 'iron', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'tungsen', 'uranium', 'zinc'
  ]; // Defining ores

  // Removed recipes
  ores.forEach(ore => {
    event.remove({id: `immersiveengineering:crafting/hammercrushing_${ore}`})
    event.remove({id: `immersiveengineering:crafting/raw_hammercrushing_${ore}`})
  })
})