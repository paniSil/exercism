//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  let result = new Set();
  for (let w of candidates) {
    if (word.toLowerCase() === w.toLowerCase()) {
      continue;
    } else if (sort(w) === sort(word)) {
      result.add(w);
    }
  }
  return result;
};

const sort = (word) => word.toLowerCase().split('').sort().join('');
