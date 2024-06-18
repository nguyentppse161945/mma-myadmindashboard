// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgMMvXkYV2-9DW0Js7SE1oYnLiC9SqAMk",
  authDomain: "mma-my-admin-dashboard.firebaseapp.com",
  projectId: "mma-my-admin-dashboard",
  storageBucket: "mma-my-admin-dashboard.appspot.com",
  messagingSenderId: "215502658174",
  appId: "1:215502658174:web:847e760088d7f9391ad62f",
  measurementId: "G-NV7P8HGCT9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
