export function score(x, y) {
  const coordinate = Math.sqrt(x*x + y*y);
  return (coordinate <= 1) ? 10 : (coordinate <= 5) ? 5 : (coordinate <= 10) ? 1 : 0;
}