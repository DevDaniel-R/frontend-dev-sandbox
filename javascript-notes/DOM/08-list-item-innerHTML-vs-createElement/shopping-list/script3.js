function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li')
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)')

    secondItem.outerHTML = '<li>Replaced Second</li>'
}

const allLiItems = document.querySelectorAll('#item-list li')

function replaceAllItems(){
    // allLiItems.forEach((item, index) => {
    //     // item.outerHTML = '<li>Replaced</li>';
    //     // item.innerHTML = 'replace all'
    //     item.textContent = 'replaced all items'
    // });

    allLiItems.forEach((item, index) => (item.outerHTML = index === 1 ? '<li>Second Li</li>' : '<li>replaced</li>')) 
};

// replaceFirstItem();
// replaceSecondItem();
replaceAllItems();

console.log(allLiItems)