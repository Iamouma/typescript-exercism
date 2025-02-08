export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  if (distance > 10) return 0; // Outside the target
  if (distance > 5) return 1; // Outer circle
  if (distance > 1) return 5; // Middle circle
  return 10; // Inner circle
}
