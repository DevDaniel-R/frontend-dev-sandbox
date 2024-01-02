//stringify method will turn an object into a JSON String

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

//! Very common methods used in JSON JSON.stringify & JSON.parse
//Convert to JSON String
const str = JSON.stringify(post);

console.log(str);
console.log(post);

// Parse JSON Also to access a specific property we first need to parse it. 
const obj = JSON.parse(str);

console.log(obj);

