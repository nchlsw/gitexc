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

const numbers = [1, 2, 3, 4, 5];
let result = 0;
const squareNumbers = (numbers = []) => {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    result = newNumbers.push(Math.pow(numbers[i], 2));
  }
  return newNumbers;
};

console.log(squareNumbers(numbers));
