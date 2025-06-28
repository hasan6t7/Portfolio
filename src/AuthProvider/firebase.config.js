// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCO0X_toU5ZRCCykO3s7a26iPN8tr8xoHU",
  authDomain: "md-hasanujjaman.firebaseapp.com",
  projectId: "md-hasanujjaman",
  storageBucket: "md-hasanujjaman.firebasestorage.app",
  messagingSenderId: "525153730639",
  appId: "1:525153730639:web:07f52c89d3e1a720f8ea3a",
  measurementId: "G-8C6F1SL0HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
