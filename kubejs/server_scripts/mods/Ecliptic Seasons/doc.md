## Quick support for Ecliptic Seasons data packs

Currently, two types of data packs are supported: biome climate type tags and crop block growth control tags.

For biome climate types, check the existing tags in the data folder.
* `eclipticseasons:seasonal` indicates that the biome has distinct seasonal changes.
* `eclipticseasons:monsoonal` indicates that the biome has seasonal wet and dry periods.
* The `eclipticseasons:is_small` tag is a special tag for marking small biomes, and generally doesn’t need to be used.
* The remaining tags, `eclipticseasons:rainless`, `eclipticseasons:arid`, `eclipticseasons:droughty`, `eclipticseasons:soft`, `eclipticseasons:rainy`, indicate biomes with only slight seasonal changes in rainfall, with only differences in precipitation amounts.

For crops, it’s more complex. In addition to using various tags, you can assign categories to tag item or block if they haven't a bind item.
A crop can only have one season growth requirement tag and one humidity growth requirement tag. When grown in the wrong environment, its growth rate will slow significantly, and vice versa.
* For seasons, there are 15 preset types to choose from based on your needs, each word indicates a suitable season: `eclipticseasons:crops/spring`, `eclipticseasons:crops/summer`, `eclipticseasons:crops/autumn`, `eclipticseasons:crops/winter`, `eclipticseasons:crops/spring_summer`, `eclipticseasons:crops/spring_autumn`, `eclipticseasons:crops/spring_winter`, `eclipticseasons:crops/summer_autumn`, `eclipticseasons:crops/summer_winter`, `eclipticseasons:crops/autumn_winter`, `eclipticseasons:crops/spring_summer_autumn`, `eclipticseasons:crops/spring_summer_winter`, `eclipticseasons:crops/spring_autumn_winter`, `eclipticseasons:crops/summer_autumn_winter`, `eclipticseasons:crops/all_seasons`
* For humidity, there are 15 preset types as well, the two words mean the lowest and the highest suitable humidity: `eclipticseasons:crops/arid_arid`, `eclipticseasons:crops/arid_dry`, `eclipticseasons:crops/arid_average`, `eclipticseasons:crops/arid_moist`, `eclipticseasons:crops/arid_humid`, `eclipticseasons:crops/dry_dry`, `eclipticseasons:crops/dry_average`, `eclipticseasons:crops/dry_moist`, `eclipticseasons:crops/dry_humid`, `eclipticseasons:crops/average_average`, `eclipticseasons:crops/average_moist`, `eclipticseasons:crops/average_humid`, `eclipticseasons:crops/moist_moist`, `eclipticseasons:crops/moist_humid`, `eclipticseasons:crops/humid_humid`