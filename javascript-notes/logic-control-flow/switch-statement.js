const d = new Date(2022, 3, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// console.log(month)
switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is Febuary');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not Jan, Feb or Match');
}

// console.log(hour)

switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good afternoon');
        break;
    default:
        console.log('It is not Jan, Feb or Match');
}

//! Note - switches are most commonly used with with immediate values