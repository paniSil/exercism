//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  let result = new Set();
  const testWord = word.toLowerCase().split('').sort().join('');
  for (let w of candidates) {
    if (word.toLowerCase() === w.toLowerCase()) {
      continue;
    } else if (w.toLowerCase().split('').sort().join('') === testWord) {
      result.add(w);
    }
  }
  return result;
};
