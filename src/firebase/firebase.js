import * as firebase from 'firebase';

const config = {
    apiKey: "<API KEY>",
    authDomain: "<DOMAIN>",
    databaseURL: "https://expensify-b2cc1.firebaseio.com",
    projectId: "expensify-b2cc1",
    storageBucket: "expensify-b2cc1.appspot.com",
    messagingSenderId: "177207584858"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref()
    .on('value', (snapshot) => {
      const val = snapshot.val();  
      console.log(`${val.name} is a ${val.job.title} with ${val.job.company}.`);
    }, (e) => {
      console.log('error fetching data', e);
    });

    database.ref('expenses').push({
        description: 'rent',
        note: 'june rent',
        amount: 12345,
        createdAt: 55454
    });

    database.ref('expenses').push({
        description: 'phone',
        note: 'june phone',
        amount: 123,
        createdAt: 5545554
    });

    //   database.ref()
//     .on('value', (snapshot) => {
//       console.log(snapshot.val());
//     }, (e) => {
//         console.log('error fetching data', e);
//     });

//   setTimeout(() => {
//     database.ref('job/title').set('Manager');
//   },1500);

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {

//     });

//   database.ref().set({
//         name: 'marc mendoza',
//         age: 48,
//         stressLevel: 6,
//         job: {
//             title: 'Software Developer',
//             company: "Google"
//         },
//         isMarried: true,
//         location: {
//             city: 'orlando',
//             country: 'usa'
//         }
//   }).then(() => {
//       console.log('firebase call complete.');
//   }).catch((error) => {
//     console.log('firebase error: ' + error);
//   });

// EXAMPLES
// database.ref('age').set(48);
// database.ref('location/counntry').set("United States");

// database.ref('attributes').set({
//   height: 71,
//   weight: 199
// }).then(() => {
//     console.log('firebase call complete.');
// }).catch((error) => {
//   console.log('firebase error: ' + error);
// });
  
// database.ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log('data removed');
//     }).catch((error) => {
//         console.log('firebase error: ' + error);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('data updated');
// }).catch((error) => {
//     console.log('firebase error: ' + error);
// });
