import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgd_SBfOsBR1nJ9M8D_KFNEL5ucCZbqY8",
  authDomain: "my-linkedin-clone-app.firebaseapp.com",
  projectId: "my-linkedin-clone-app",
  storageBucket: "my-linkedin-clone-app.appspot.com",
  messagingSenderId: "667420194816",
  appId: "1:667420194816:web:254ac6ed6d6e12e8b280e5"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
