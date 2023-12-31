let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

// x = todo;

const person = {
    address: {
        coords: {
            lat: 43.9384,
            lng: -71.3232
        }
    }
}

// x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

//?when we call obj3 here we will have two objects within an object.
// const obj3 = {obj1, obj2};

//?when using  the spread operator it combined the values to one object
const obj3 = { ...obj1, ...obj2 };
//? Object . assign does the same as above with both objs using spread operator
const obj4 = Object.assign({}, obj1, obj2)
//? when using the spread op on one object it will output obj1 variables into the new opject and input the onj2 object within the new object
const obj5 = { ...obj1, obj2 };

// x = obj4

// console.log(x)

//? Array of objects
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' }
]

//? we can [0,1,2] to select a specific object within an array. and to point to a value within one of the arrays we can do something like todos[2].name
x = todos;

//!methods withing objects
//? gives keys within an object
x = Object.keys(todos);

//? gives values within an object
x = Object.values(todos);

//? gets length of keys within object
x = Object.keys(todos).length;

//? gets all entries within the object
x = Object.entries(todo);

//? this will come back as false as object does not have a property of age
x = todos.hasOwnProperty('age');

console.log(x);