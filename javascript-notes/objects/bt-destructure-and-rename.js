const firstName = 'John';
const lastName = 'Doe';
const age = '30';

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
}

console.log(person.age)

//Destructuring
const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'John',
    },
};

//? getting property without destructuring -  const id = todo.id;
// destructure properties from object
const { id: todoId, title, user: { name }, } = todo

console.log(todoId)

// Destructuring Arrays

const numbers = [23, 67, 33, 49];
//! Note - Destructure objects with brackets {} Destructure arrays with []
//! Note use rest operator to assign the rest of the values to a variable
const [first, second, ...restOfNums] = numbers;

console.log(first, second, restOfNums);
