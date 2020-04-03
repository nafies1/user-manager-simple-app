
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA5wJOGgzOKDOul8iUs3wfgquFB09Xs5CE",
    authDomain: "employee-manager-by-nafi-b906c.firebaseapp.com",
    projectId: "employee-manager-by-nafi-b906c"
  });

const db = firebase.firestore();
const fs = require('fs')
const rawData = fs.readFileSync('../db.json')
const { employees } = JSON.parse(rawData)

employees.forEach((employee) => {
    db.collection("employees").add({
      "_id": employee._id,
      "index": employee.index,
      "guid": employee.guid,
      "isActive": employee.isActive,
      "balance": employee.balance,
      "picture": employee.picture,
      "age": employee.age,
      "eyeColor": employee.eyeColor,
      "name": employee.name,
      "gender": employee.gender,
      "company": employee.company,
      "email": employee.email,
      "phone": employee.phone,
      "address": employee.address,
      "about": employee.about,
      "registered": employee.registered,
      "latitude": employee.latitude,
      "longitude": employee.longitude,
      "tags": employee.tags ,
      "friends": employee.friends ,
      "greeting": employee.greeting ,
      "favoriteFruit": employee.favoriteFruit
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});