/*
Title: Factorial of a number

>> Write down a program that will find factorial of a number

## Test ##

input: 3  output: 6

input: 4  output: 24 // 1*2*3*4 = 24
*/

function factorial(num){
    if (num === 0 || num ===1 ) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i
        }
        return result
    }

} 
console.log(factorial(4))  