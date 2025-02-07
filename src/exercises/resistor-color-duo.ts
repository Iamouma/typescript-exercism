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
