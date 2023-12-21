var arr = [1, 2, 3];
//? here we used the length method to get the number of items that are in array
// console.log(arr.length)


var obj = {
    a: 1,
    b: 2
};
//! there's no length property on objects 
console.log(obj.length)

//? to see how many properties are in an object we create a variable called length and we'll use the method object that keys can pass or object to that. And it will return to us and our length variable and array with the names of the properties that we have on this object. Now we can make use of the length property on a race to get the length of the object with object keys

var length = Object.keys(obj).length;

console.log(length);