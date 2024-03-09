/*

    Title: Even or Odd

    >> Write a program that will check the given number is even or odd

    ## Test ##

    input: 3 -> output: odd

    input: 4 -> output: even

*/

function numberChecker(num) {
    if (num % 2 === 0) {
        return console.log('This is an even number')
    }  else if (num % 2  != 0) {
        return console.log('This is an odd number')
    }
}

console.log(numberChecker(36))
