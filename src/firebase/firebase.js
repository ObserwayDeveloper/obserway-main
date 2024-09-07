// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; // Realtime Database'i ekleyin

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89TUZ0jcI4IcMWAdUbeX4RKwL7lY5cvE",
  authDomain: "obserway.firebaseapp.com",
  projectId: "obserway",
  storageBucket: "obserway.appspot.com",
  messagingSenderId: "847648562185",
  appId: "1:847648562185:web:830e25d0955b1ddd87acd8",
  measurementId: "G-N06R5MY25F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app); // Realtime Database'i başlatın
