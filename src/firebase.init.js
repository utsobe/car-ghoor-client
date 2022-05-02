// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALh7z_sS1KOK2lynVjsE4wERUHKyIHlQs",
    authDomain: "car-ghoor.firebaseapp.com",
    projectId: "car-ghoor",
    storageBucket: "car-ghoor.appspot.com",
    messagingSenderId: "366873138189",
    appId: "1:366873138189:web:e2a53f1ae81a9404e73144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;