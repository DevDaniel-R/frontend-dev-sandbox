function sayHello() {
    console.log('Hello World');
}
//calling function
sayHello();
//passing data into a function, we do that with parameters
function add(num1, num2) {
    console.log(num1 + num2);
}
//When calling function you pass in the number that you want to add 5 & 10 these are arguments

add(5, 10);

//! Immediately Invoked Function Expresions
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE')
    hello();
})();

(function (name) {
    console.log('Hello ' + name);
})('Shawn');

(function hello() {
    console.log('Hello');
})();