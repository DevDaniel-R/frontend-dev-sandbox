// console.log(window);
// console.dir(window.document);

// console.log(document.body.innerHTML)

// console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello  World</h1>';

console.log(document.getElementById('main'));

const main = document.getElementById('main');

document.querySelector("#main h1").innerText = "Hello";

//! turning an html collection into an array with JS Array method

const forms = Array.from(document.forms);
//! now we can loop through this collection
forms.forEach((form) => console.log(form));

