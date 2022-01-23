export function makeRandomArray(lettersCount: number): number[] {
  const array = [...Array(lettersCount).keys()];
  array.sort(() => Math.random() - 0.5);
  return array;
}
