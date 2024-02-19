// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5OROEbuzrUWuAPz9Bb8ZG4COqOmSOqro",
  authDomain: "clinic-management-fa73f.firebaseapp.com",
  projectId: "clinic-management-fa73f",
  storageBucket: "clinic-management-fa73f.appspot.com",
  messagingSenderId: "221100573079",
  appId: "1:221100573079:web:e09b888d167cdc3a3604d2",
  measurementId: "G-V4Q9RHXVB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)