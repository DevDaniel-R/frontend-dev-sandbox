// While loop and do while loop.
//! these along with the for loop are older ways of doing iterations, Now we have high order array methods that we use more frequently like for each. Also for in and for of.  

//? while loop very common to a for loop. A common rule that many programmers follow is to use a for loop when you know the number of times that you want the loop to run and then to use a while loop when the number of times the loop will run is unknown.
let i = 0;
//todo while loop 1
// while (i<=20) {
//     console.log('Number ' + i);
//     i++
// }
// console.log(i);

//todo while Loop over arrays
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//todo Nesting while loops
// while (i <= 5) {
//     console.log('number ' + i);

//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

//todo Do While loop
do {
    console.log('Number ' + i);
    i++
} while (i <= 20);