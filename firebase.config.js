const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDnu9tERCnVK6GBTRihV8rs5uW6-5pFcq8",
  authDomain: "geo-location-app.firebaseapp.com",
  databaseURL: "https://geo-location-app.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "419516878897"
};

firebase.initializeApp(config);


module.exports = firebase;
