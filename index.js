//1. sum of positive and negatives
//input : array of numbers
//output : array [ sum of positives, sum of negatives]
//example :
// example input :[1, 3, -4, 2, -13, -7]
// example output : [6, -24]

// const numbers = [1, 3, -4, 2, -13, -7];

// const addNumbers = (numbers = []) => {
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       positive += numbers[i];
//     } else if (numbers[i] < 0) {
//       negative += numbers[i];
//     }
//   }
//   return [positive, negative];
// };

// console.log(addNumbers(numbers));

//2. square all
// input : array of numbers
// output : same array of numbers but squared
// example : [1, 2, 3, 4, 5]
// output : [1, 4, 9, 16, 25]

// const numbers = [1, 2, 3, 4, 5];
// let result = 0;
// const squareNumbers = (numbers = []) => {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     result = newNumbers.push(Math.pow(numbers[i], 2));
//   }
//   return newNumbers;
// };

// console.log(squareNumbers(numbers));

// 3. plus minus
// input : [1, 2, 3, 4, 5, 9]
// output : 8

// const numbers = [1, 2, 3, 4, 5, 9];

// const plusMinus = (numbers = []) => {
//   let result = 0;
//   let operator = "plus";
//   for (let i = 0; i < numbers.length; i++) {
//     if (operator == "plus") {
//       result += numbers[i];
//       operator = "minus";
//     } else if (operator == "minus") {
//       result -= numbers[i];
//       operator = "plus";
//     }
//   }
//   return result;
// };
// console.log(plusMinus(numbers));

//4. remove vowels
// input : "hello"
// output : remove vowels
//use method split

// const vowels = "hello world";
// const removeVowels = (val) => {
//   result = vowels.split("");

//   for (let i = 0; i < result.length; i++) {
//     if (
//       result[i] == "a" ||
//       result[i] == "i" ||
//       result[i] == "u" ||
//       result[i] == "e" ||
//       result[i] == "o"
//     ) {
//       result[i] = "";
//       result.push(result[i]);
//     }
//   }
//   result = result.join("");
//   return result;
// };
// console.log(removeVowels(vowels));

// 5. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71
const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

let numbers = 0;
const countAlphabet = (val) => {
  for (let i = 0; i < alphabetArr.length; i++) {
    numbers += alphabetArr.indexOf(val[i]) + 1;
  }
  return numbers;
};

console.log(countAlphabet("steve"));
//. remove duplicate
// there are 2 array of numbers, those 2 arrays has some identical value
// show new array with both arrays combined but no identical value

// const number1 = [1, 2, 3, 4, 5];
// const number2 = [3, 4, 5, 6, 7];

// const newNumber = new Set(number1.concat(number2));

// console.log(newNumber);
