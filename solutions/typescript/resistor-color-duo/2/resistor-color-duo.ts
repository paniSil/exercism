export const decodedValue = (colorName: string[]) => Number(`${colorCode(colorName[0])}${colorCode(colorName[1])}`);

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

type Color = typeof COLORS[number];
export const colorCode = (color: Color) => COLORS.indexOf(color);