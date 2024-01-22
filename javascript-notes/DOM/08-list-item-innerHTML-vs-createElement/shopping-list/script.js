//? Quick and Dirty. 
// function createListItem(item) {
//     const li = document.createElement('li');
//     li.innerHTML = `${item} <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//     </button>`;

//     document.querySelector('.items').appendChild(li);
// }

// createListItem('eggs')
// createListItem('chicken')

//? Clean and Performant 
function createNewListItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    // const button = document.createElement('button');
    // button.className = 'remove-item btn-link text-red';
    //! refactor with function 
    const button = createButton('remove-item btn-link text-red');

    // const icon = document.createElement('i');
    // icon.className = 'fa-solid fa-xmark';
    //! refactor with function 
    //todo delete const icon = createIcon('fa-solid fa-xmark');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

//? Refactor to multiple functions

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button
};

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon
};

createNewListItem('cheese');