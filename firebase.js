import * as firebase from "firebase";

//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn2QHsYTZbhQfMsfhpH3x19SLbEdTmtIU",
  authDomain: "awesomeproject-ecfd6.firebaseapp.com",
  projectId: "awesomeproject-ecfd6",
  storageBucket: "awesomeproject-ecfd6.appspot.com",
  messagingSenderId: "1040574053588",
  appId: "1:1040574053588:web:705853645e83c302054f41",
};

let app;
if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
