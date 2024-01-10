//Challenge: write a JS code to print Even number in given array

// with for

// const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   const item = numbers[i];
//   if (item % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// console.log(evenNumbers);

// with for of

const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
const evenNumbers = [];

for (const i of numbers) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);
