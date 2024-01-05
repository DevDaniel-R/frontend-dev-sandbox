// Todo 1.
//* Calculator challenge - create a function called calculator that takes three params: num1 num2 and operator. The Operator can be +, -, *, or /. Thw function should return the result of the calculation.If anything other than the four ops is passed in, the function should return an error message. 

// const operator = ['+', '-', '*', '/']
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+'  :
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('does not match');
    }
    return result
}

const calc = calculator(5, 2, '/');
console.log(calc)