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

// Minimum
function min(a, b) {
    return a < b ? a : b;
}