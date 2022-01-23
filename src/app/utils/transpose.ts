export function transpose(array: number[]): number[] {
  return array.reduce((acc, item, index) => {
    acc[item] = index;
    return acc;
  }, [] as number[]);
}
