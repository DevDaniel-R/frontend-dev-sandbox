//test object
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },    
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Mockingjay',
        author: '',
        status: {
            own: true,
            reading: false,
            read: false
        }
    } 

];

//! changing values using dot notation
//? Note - this isn't the best method, looping through the array is best like we did below



//! using map to change values within the object
//? Note - using map does indeed return a new array

// let newLibrary = library.map(obj => {
//     if ( obj.status.read == false ){
//         return { ...obj, read: true };
//     }
//     return obj
// })

//! using forEach to change values within the object
//? Note - this method does not return a new array

    library.forEach(obj => {
        if ( obj.status.read === false ){
        obj.status.read = true 
        };
    });

console.log(library)