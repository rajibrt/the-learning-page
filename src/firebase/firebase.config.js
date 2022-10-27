// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,


    // apiKey: "AIzaSyD06IlhGKwvSocPQKCyNI40eCMQahfyfN8",
    // authDomain: "the-learning-page.firebaseapp.com",
    // projectId: "the-learning-page",
    // storageBucket: "the-learning-page.appspot.com",
    // messagingSenderId: "683350271950",
    // appId: "1:683350271950:web:fa8acf70c360e999976d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;