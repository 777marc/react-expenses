/////////////////////
// OBJECT DESTRUCTURE
/////////////////////

// const person = {
//     name: 'Marc',
//     age: 48,
//     location: {
//         city: 'Orlando',
//         temp: 80
//     }
// };

// const { name: firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

/////////////////////
// ARRAY DESTRUCTURE
/////////////////////

// const address = ['10627 Authors Way', 'Orlando', 'FL', '32832'];
// const [street,city,state = "Hawaii",zip] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (ice)', '$2.00', '$2.69', '$2.75'];
const [coffee,,price] = item;

console.log(`A medium ${coffee} costs ${price}.`);