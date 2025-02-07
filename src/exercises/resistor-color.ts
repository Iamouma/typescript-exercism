
export const COLORS =[
"black",
"brown",
"red",
"yellow",
"orange",
"green",
"blue",
"violet",
"grey",
"white",
];
export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
}
