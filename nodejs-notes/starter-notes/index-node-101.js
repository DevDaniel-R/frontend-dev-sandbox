//! running this code in the terminal by inputting node (filename). Note it doesn't need to include the .js at the end of the file. 
let num = 5

console.log(num)

//Todo Asynch and non-blocking code
//! This is what's called synchronous code. It's code that runs line by line and one at a time before the by message is logged. 

console.log('Hello');

console.log('Hello again');

console.log('Hello again and again');

console.log('Hello again and again and again');

//! Using setTimeout method to simulate the behavior of querying the database. Also because it has a callback function node will run this in the background. This makes this bit of code non blocking rather then wait for this function to run the next bit of code.

console.log('Hello');

console.log('Hello again');

setTimeout(function(){
    console.log('Hello again and again');
}, 3000 );

console.log('Hello again and again and again');