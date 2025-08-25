export function isPangram(sentence : string) : boolean {
  const res = alphabet.map((letter) => sentence.toLowerCase().includes(letter));
  return res.every(Boolean);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');