//! Traversing the DOM
let output;
//? Get child elements

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[2].style.color = 'red';

//? Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement.style.border = '2px solid #777';

//? Siblings elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';

secondItem.previousElementSibling.style.color = 'orange';


console.log(output)

//!Creating a text node
const div = document.createElement('div');

div.className = 'child';

div.id = 'myElement';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('hello');

div.appendChild(text);

document.querySelector('#container').appendChild(div);

