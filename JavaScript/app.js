// // Looping a Triangle
// for (let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i));
// }

// // FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// // Chessboard
// for (let i = 0; i < 8; i++) {
//     let row = "";
//     for (let j = 0; j < 8; j++) {
//         if ((i + j) % 2 === 0) {
//             row += "#";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// // Minimum
// const a = 10;
// const b = 5;
// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(a, b))

// // Recursion
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// // Recursion with prompting numbers
// function minPrompted() {
//     const a = parseInt(prompt("Enter the first number:"));
//     const b = parseInt(prompt("Enter the second number:"));
//     console.log(min(a, b));
// }

// // Bean Counting
// function countBeans(arr) {
//     return arr.reduce((count, item) => {
//         return count + (item === "bean" ? 1 : 0);
//     }, 0);
// }

