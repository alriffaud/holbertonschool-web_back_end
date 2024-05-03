// This script creates a function named hasValuesFromArray that returns a boolean if all the
// elements in the array exist within the set.
export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  return (newSet.isSubsetOf(set));
}
