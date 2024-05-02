// This script defines a function named divideFunction.
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
