//todo Logical operators used &&, ||, ??

//? && they all have to be true
console.log(10>20&&30>15&&40>30)
//? ?? only one has to be true
console.log(10>20||30<15);
//! && - Will return the first falsy value or the last value 
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

//? Practical example f using &&
const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

//! || - Will return the first truthy value or the last

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b)

//! ?? - Returns the right side operand when the left is null or undefined.
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = '' ?? 20;

console.log(c);

//todo Logical Assignment
//* || = assigns the right side value only if the left is a falsy value.
let a2 = false;
//! note - 
// if (!a2) {
//     a2 = 10;
// }
a2 = a2 || 10;
console.log(a2)

//* && = assigns the right side value only if the left is a truthy value.
//* ?? = assigns the right side value only if the left is null or undefined.
