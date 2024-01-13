//! FIZZ-BUZZ CHALLENGE
//? Instructions - Print/Log the numbers from 1 to 100. 
//? For multiples of three print "Fizz" instead of the number
//? for multiples of five print "Buzz"
//? for numebers which are multiple of both three and five print "FiizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }
    
//! Fizz Buzz while loop

let j = 1

while (j <= 100) {
    if (j % 15 === 0) {
        console.log('FizzBuzz')
    } else if (j % 3 === 0) {
        console.log('Fizz')
    } else if (j % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(j)
    }
    j++
}
