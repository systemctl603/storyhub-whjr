import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBs5BKh2cEUCPnb9BmR-MO2e13mhZMVKHQ",
  authDomain: "story-hub-fd6b4.firebaseapp.com",
  databaseURL: "https://story-hub-fd6b4.firebaseio.com",
  projectId: "story-hub-fd6b4",
  storageBucket: "story-hub-fd6b4.appspot.com",
  messagingSenderId: "854282000549",
  appId: "1:854282000549:web:f6c34736ca40bea3fdd54c",
}
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
