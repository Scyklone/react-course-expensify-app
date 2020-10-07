//
// Object Destructuring
//

// const person = {
//     name: 'Gabriel',
//     age: 24,
//     location: {
//         city: 'Waltham',
//         temp: 77
//     }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName); //Penguin, Self-Published

//
// Array Destructuring
//

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '10417'];
const [, city, state='New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Cofee (hot)', '$2.00', '$2.50','$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);