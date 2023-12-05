const restaurants = [
    { name: "Cap City Diner", milesAway: 2.2 },
    { name: "Chop Shop", milesAway: 4.1 },
    { name: "Northstar Cafe", milesAway: 0.9 },
    { name: "City Tavern", milesAway: 0.5 },
    { name: "Shake Shake", milesAway: 5.3 }
];

const result = restaurants.filter(restaurant => 
    //? Note - that instead of using string method 'startsWith' we could also use string method includes. includes method is also case sensitive.
    restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)

console.log(result) 