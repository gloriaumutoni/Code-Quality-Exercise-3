// write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.

const reverseStringVowels = (string) => {
  let vowels = string.replace(/[^aeiuo]/gi, "").split("");
  return string.replace(/[aeiuo]/gi, (_) => vowels.pop());
};
