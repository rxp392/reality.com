// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


firebase.initializeApp({apiKey: "AIzaSyBdM9-VEBwzueiR8rlLmJ5OoHuXU7et4rU",
authDomain: "realitycom.firebaseapp.com",
databaseURL: "https://realitycom-default-rtdb.firebaseio.com",
projectId: "realitycom",
storageBucket: "realitycom.appspot.com",
messagingSenderId: "1019566933186",
appId: "1:1019566933186:web:63c493595bb9c65b2ea75b",
measurementId: "G-DXK6ZD436Y"});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
