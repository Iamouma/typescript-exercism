export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};

export function decodedValue(colors: string[]): number {
  return parseInt(`${colorCode(colors[0])}${colorCode(colors[1])}`);
}

export function decodedResistorValue(colors: string[]): string {
  const value = decodedValue(colors) * Math.pow(10, colorCode(colors[2]));
  if (value >= 1000000000) {
    return `${value / 1000000000} gigaohms`;
  } else if (value >= 1000000) {
    return `${value / 1000000} megaohms`;
  } else if (value >= 1000) {
    return `${value / 1000} kiloohms`;
  }
  return `${value} ohms`;
}
