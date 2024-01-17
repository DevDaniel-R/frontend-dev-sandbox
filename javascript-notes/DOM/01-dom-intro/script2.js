//! Selecting Multiple Items with querySelectorAll

const listItems = document.querySelectorAll('li');

listItems.forEach((item, index) => {
    item.classList.add('items');
})

//*This will return an array like structure. similar to an html collection however you can use high order function with the nodelist opposed to the html collection.
//!With an html collection you will first have to convert it to an array. 

console.log(listItems);

// listItems[1].style.color = 'blue';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 1) {
//         item.remove();
//     }

//     if (index === 0) {
//         item.innerHTML = `
//         Oranges
//         <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }

// });
//?******************************************************************************************************
//todo USING GETELEMENTBYCLASSNAME() -> getting html collection instead of a node list

const listItems2 = document.getElementsByClassName('items');

console.log(listItems2[2].innerText);
//! We need to convert listItems2 into an array to use the forEach function on it. Array.from

const listItemsArray = Array.from(listItems2);
console.log(listItemsArray);

listItemsArray.forEach((item) => {
    console.log(item.innerText);
})