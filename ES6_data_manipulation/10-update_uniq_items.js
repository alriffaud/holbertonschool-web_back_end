// This script creates a function named updateUniqueItems that returns an updated map for all
// items with initial quantity at 1.
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [item, value] of map.entries()) {
    if (value === 1) {
      map.set(item, 100);
    }
  }
}
