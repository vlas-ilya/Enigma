export function zip<T, D>(array1: T[], array2: D[]): [T, D][] {
  return array1.map((item, index) => [item, array2[index]]);
}
