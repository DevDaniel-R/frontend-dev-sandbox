/*
    Title: find min, max of two numbers

    >> Write down a program that will takes two number as input and

    >> find min and max using ternary operator

    ## Test ##

    input: 1 2 output: Min= 1 Max= 2

    input: 6 5 output: Min= 5 Max= 6
*/


// function minMaxCal(num1, num2) {
//     if (num1 > num2) {
//         console.log(`Min = ${num2} Max = ${num1}`)
//     } else if (num2 > num1) {
//         console.log(`Min = ${num1} Max = ${num2}`)
//     }
// } 
//  console.log(minMaxCal(6,5))

function minMaxCal2(num1, num2) {
    let min = (num1 > num2) ? num2 : num1;
    let max = (num1 > num2) ? num1 : num2;
    return console.log("Min =", min, "Max =", max)
} 

console.log(minMaxCal2(37,99))