// Question 1
const isRealPalindrome = (text) => {
  let newText = text.replace(/[^a-z]/gi, "").toLowerCase();
  let i = 0, j = newText.length - 1;
  while (i < j) {
    if (newText[i] !== newText[j]) return false;
    i++;
    j--;
  }
  return true
};
isRealPalindrome("hi there S&*(&(*&(*")
// Question 2

// const runningTotal = (array) => array.reduce((a, b, i) => a = [...a, array[i - 1] ? b + a[i - 1] : b], []);
const runningTotal = (array) => array.reduce((a, b, i) => (a[i - 1] ? a.push(b + a[i - 1]) :a.push(b),a), []);
// const runningTotal = (array) => {
//   let sum = 0;
//   return array.map((val) =>sum += val)
// }

// Question 3
const swap = (string) => string.split(" ").map(w => w.length > 1 ? w[w.length - 1] + w.slice(1, w.length > 2 ? w.length - 1:1) +w[0] : w) .join(" ")

// Question 4
const wordSizes = (s) => s.length > 0 ? s.split(" ").reduce((a, b) => ( a[b.length] ? a[b.length]++ : a[b.length] = 1, a), {}) : {};

// Question 5
const union = (a1, a2) => {
  return [...new Set([...a1,...a2])]
};

// Question 6
const firstRecurring = (s) => s.split("").reduce((a, b,i) => (a[b] ? a=b : a[b] = 1, a = typeof a === "object" && i === s.length - 1 ? "":a, a), {})

// Question 7
const showMultiplicativeAverage = (ar) => (ar.reduce((a, b) => a * b, 1) / ar.length).toFixed(3)

// Quetsion 8
const multiplyList = (a1,a2) => a1.map((v,i) => v * a2[i]) 

// Question 9
const sequence = (n) => Array.from({ length: n }, (_, i) => i + 1);


// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
