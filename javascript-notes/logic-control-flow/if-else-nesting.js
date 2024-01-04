//! if else if else statement
const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log("Good Morning")
} else if (hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Night")
}

//! Nested If Statement
if (hour < 12) {
    console.log("Good Morning")
    if (hour === 6) {
        console.log("Wake Up")
    }
} else if (hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Night")
}

//! Multiple Conditions in an if Statement
if (hour >= 7 && hour < 15){
    console.log('Work Time');
}
