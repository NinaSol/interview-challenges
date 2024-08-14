export default function filtrarPares(array: number[]): number[] {
  const pairs: number[] = [];
  const pairsCount: Map<number, number> = new Map();

  // Count occurrences
  array.forEach(number => {
    pairsCount.set(number, (pairsCount.get(number) ?? 0) + 1);
  });

  // Filter out numbers with even occurrences
  pairsCount.forEach((value: number, key: number) => {
    if (value % 2 === 0) {
      pairs.push(key);
    }
  });

  return pairs;
}