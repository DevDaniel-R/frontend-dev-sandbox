const menuItems = [
    //object of arrays
    // {
    //     item: "Blue Cheese Salad", 
    //     price: 8
    // },
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicey Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
    ];

    const sum = menuItems.reduce((accumulator, menuItem) => {

        //! console log to see whats going on within reduce
        // console.log(`
        //     accumulator: ${accumulator},
        //     menu item price: ${menuItem.price}
        // `)

        return accumulator + menuItem.price;
    }, 0);

    console.log(sum)