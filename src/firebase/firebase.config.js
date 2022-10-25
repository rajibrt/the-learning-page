// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuoi93P67w9fL0UnHJMGW3rHOiGXarwsk",
    authDomain: "king-palace.firebaseapp.com",
    projectId: "king-palace",
    storageBucket: "king-palace.appspot.com",
    messagingSenderId: "645662142037",
    appId: "1:645662142037:web:f2793eb7b4219993a66edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;