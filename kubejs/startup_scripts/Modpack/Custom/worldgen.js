WorldgenEvents.remove(events => {
  events.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "bigreactors:yellorite_ore",
      "bigreactors:yellorite_deepslate_ore",
      "create:zinc_ore",
      "create:deepslate_zinc_ore"
    ]
  })
})