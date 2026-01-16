// This problem was asked by Yelp.

// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

// For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
function letterCombinations(digits, phone) {
  if (!digits.length) return [];
  let result = [];

  function append(letters) {
    if (result.length === 0) {
      return [...letters];
    }

    const aux = [];

    result.forEach(prefix => {
      letters.forEach(letter => {
        aux.push(prefix + letter);
      });
    });

    return aux;
  }

  for (const digit of digits) {
    result = append(phone[digit]);
  }

  return result;
}

// exemplo
const phone = {
  "2": ["a", "b"],
  "3": ["d"],
  "4": ["g", "h"]
};

console.log(letterCombinations("234", phone));
// ["adg", "adh", "bdg", "bdh"]
