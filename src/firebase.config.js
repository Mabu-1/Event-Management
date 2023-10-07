// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhiTR6BQt8YP3yTAGgeaRpQhZcX02kQPk",
  authDomain: "happy-birthdays.firebaseapp.com",
  projectId: "happy-birthdays",
  storageBucket: "happy-birthdays.appspot.com",
  messagingSenderId: "2740909443",
  appId: "1:2740909443:web:efd8cf48e635179ce3b2b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;