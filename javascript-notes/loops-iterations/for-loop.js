//! NOTE - A loop is a control structure that provides a way to do iteration in programming. And iteration is a process where you repeat something over and over again until a certain condition is met or until a certain condition is not met.

//todo- For Loop format - for ([initialExpression]; [conditionExpression]; [incrementExpression]) statement;
//?(1) [initialExpression] - Initializes a variable/counter
//?(2) [conditionExpression] - Condition that the loop will continue to run as long as it is met or until the condition is false
//?(3) [incrementExpression] - Expression that will be executed after each iteration of the loop. Usually increments the variable. 
//?(4) statement - Code that will be executed each time the loop is run. To execute a 1block of code, use the `{}` syntax

// Iteration ex
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Iteration ex with an if else if statement
// for (let a = 0; a<=40; a++) {
//     if (a === 30) {
//         console.log('I am 30 years old')
//     } else if(a != 30) {
//         console.log(`${a} is not my age`)
//     }
// }

// Nest loops -
// for (let j = 1; j <= 10; j++) {
//     console.log('Number ' + j);

//     //nested loop
//     for (let k = 1; k <= 10; k++){
//         console.log(`${j} * ${k} = ${j * k}`);
//     }
// }

//Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Sara') {
        console.log('Sara is the best')
    } else {
        console.log (names[i])
    }
}
