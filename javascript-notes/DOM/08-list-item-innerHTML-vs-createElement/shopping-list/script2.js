//TODO insertAdjacentElement EX
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement'
    const p = document.createElement('p');
    p.innerHTML = 'Hello There'

    filter.insertAdjacentElement('beforebegin', p);
}

//TODO insertAdjacentText EX

function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('afterend', 'This is after end')
}

//TODO insertAdjacentHTML EX

function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insert Adjacent html</h2>')
}

//TODO insertBefore EX



// insertElement();
// insertText();
// insertHTML()

function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

function insertBefore(newEle, existingEle) {
    existingEle.parentElement.insertBefore(newEle, existingEle.nextSibling);
}

//New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

const p = document.createElement('p');
p.textContent = 'Im p'

//Existing element to insert after
const firstItem = document.querySelector('li:first-child');

const secondItem = document.querySelector('li:last-child');

// Our custom function 
insertAfter(li,firstItem);
insertBefore(p,secondItem);