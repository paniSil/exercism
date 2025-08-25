export function decodedResistorValue(colorName: string[]) {
  const zeros: string = colorName[2] == 'black' ? '' : '0'.repeat(colorCode(colorName[2]));

  let decodedString: string = colorName[0] == 'black' ? '' : String(colorCode(colorName[0]));
  decodedString += String(colorCode(colorName[1])) + zeros;

  if (decodedString.endsWith('000000000')) {
    return decodedString.replace('000000000', '') + ' gigaohms';
  } else if (decodedString.endsWith('000000')) {
    return decodedString.replace('000000', '') + ' megaohms';
  } else if (decodedString.endsWith('000')) {
    return decodedString.replace('000', '') + ' kiloohms';
  } else {
    return decodedString + ' ohms';
  }
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

type Color = typeof COLORS[number];
export const colorCode = (color: Color) => COLORS.indexOf(color);