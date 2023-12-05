// 5 types that are primitive values - undefined, null, boolean, number, string, and symbol. 
// primitive - are passed by value for example, like listed below -  num === another Num.
// unlike objects, primitive values are immutable.

const num = 42;
const anotherNum = 42;

console.log(num === anotherNum);



// Objects are data structures for holding any number of primitives, but as compared to primitives if an object is assigned to a variable it's not copied over and it's not passed by value so to see exactly what happens we use the === to compare two objects together. Which is equal to false.
// Objects are different because Unlike primitives we have the ability to dynamically add properties to them.

const obj = {};
const anotherObj = {};

console.log(obj === anotherObj);


// Whenever we pass an object to a variable or a function wither one just holds a reference to it. In other words, a pointer to its unique place in memory no matter how many times we pass an object to different variables or functions it's always going to refer to the original created object.
// When we run the below console log we see that for both variables we don't have to separate objects. Rather, we have one shared reference.

const obj2 = {};
const anotherObj2 = obj2;

anotherObj2.a = 1;

console.log('obj2', obj2);

console.log('anotherOj2', anotherObj2);