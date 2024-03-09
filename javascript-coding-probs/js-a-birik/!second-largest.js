/*
    Title: Find second largest of three numbers

    >> Write down a program that will find second largest of three

    >> numbers using ternary operator

    ## Test ##

    input: 1 2 3 output: 2

    input: 5 2 8 output: 5
*/

function bigNumber(num1, num2, num3) {
if (num1 > num2 && num3) {
    console.log(num1)
}else if (num2 > num1 && num3) {
    console.log(num2)
}else if (num3 > num2 && num3) {
    console.log(num3)
} else {
    console.log('mistake')
}

}

console.log(bigNumber(1,2,3))