import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

//  database.ref('expenses').push({
//          description: 'Book',
//          note: 'This item',
//          amount: 21,
//          createdAt: 'Mar 22'
//       });


//database.ref('notes/-MM1V1Dl65cv-7uqEE_8').remove();

// database.ref('notes').push({
//     title: 'Making Pancakes',
//     body: 'Do a Flip!'
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });



// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// })

// database.ref().set({
//     name: 'Gabriel Ferrer',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Waltham',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
// .remove()
// .then(()=>{
//     console.log('Data is saved');
// }).catch((e) => {
//          console.log('This failedXXX.', e);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// Calling a child root for Database
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failedXXX.', e);
// });
