// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGGd-TQsjUBhHnOKAkGiK4ZNPgrUjge9o",
  authDomain: "react-firebase-methods.firebaseapp.com",
  projectId: "react-firebase-methods",
  storageBucket: "react-firebase-methods.appspot.com",
  messagingSenderId: "537373881377",
  appId: "1:537373881377:web:27748b652c9df3d7f1df60",
  measurementId: "G-GS8BQBB6VV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);