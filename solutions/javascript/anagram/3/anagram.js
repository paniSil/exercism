//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  let result = new Set();
  for (let w of candidates) {
    if (word.toLowerCase() === w.toLowerCase()) {
      continue;
    } else if (sortLetters(w) === sortLetters(word)) {
      result.add(w);
    }
  }
  return result;
};

const sortLetters = (word) => word.toLowerCase().split('').sort().join('');
