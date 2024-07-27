// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEq8hHZI997zgVZg0y9cF7xzwahCAHxEU",
  authDomain: "myfirstapp-28218.firebaseapp.com",
  projectId: "myfirstapp-28218",
  storageBucket: "myfirstapp-28218.appspot.com",
  messagingSenderId: "110053748322",
  appId: "1:110053748322:web:82e4157a792addad286b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app);

export {fireDb,auth}