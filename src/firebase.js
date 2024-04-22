//https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files
import {initializeApp} from "firebase/app"
import {getDatabase, ref, set , onValue} from "firebase/database"
import { getMessaging , getToken} from 'firebase/messaging';
import { useState } from 'react';
import { onMessage } from 'firebase/messaging';
import { getFirestore,collection, doc, setDoc, addDoc } from "firebase/firestore";


  const app = initializeApp({apiKey: "AIzaSyBdM9-VEBwzueiR8rlLmJ5OoHuXU7et4rU",
  authDomain: "realitycom.firebaseapp.com",
  databaseURL: "https://realitycom-default-rtdb.firebaseio.com",
  projectId: "realitycom",
  storageBucket: "realitycom.appspot.com",
  messagingSenderId: "1019566933186",
  appId: "1:1019566933186:web:63c493595bb9c65b2ea75b",
  measurementId: "G-DXK6ZD436Y"});


  const messaging = getMessaging(app);
  const firestoreDb = getFirestore(app);

  console.log('starting firebase')

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export async function sendMessage(sender,reciever, message) {

  // get values to be submitted
  let timestamp = new Date().toLocaleString();
  const dbRef = collection(firestoreDb, "messages");
   let sender1 = prompt("Please Tell Us Your Name"); //need to be replaced to username
  // create db collection and send in the data
  //conversation code is between two people
  console.log(sender,reciever,message)
  await addDoc(collection(firestoreDb,`${sender1}`),{
    timestamp,
    sender1,
    reciever,
    message,
  });
  console.log('sent to db!')
}


export const getTokenn = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BBIc30M1NJ8-D-GQRQPyPpvMelJ11k7UHEoLJ7FqnjKscSvv6tlPX8T8DlNJRjEJU2-mzH9TErsY1P2CVskw1JY'})
  .then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

