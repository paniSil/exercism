export function score(x: number, y: number): number {
  const coordinate = Math.sqrt(x*x + y*y);

  if (coordinate <= 1) return 10;
  if (coordinate <= 5) return 5;
  if (coordinate <= 10) return 1;
  return 0;
}
