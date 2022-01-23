export function reverse<T>(array: T[]): T[] {
  const result = [...array];
  result.reverse();
  return result;
}
