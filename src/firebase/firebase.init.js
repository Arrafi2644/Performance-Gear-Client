// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbMPktyXtnaF5mGo0s06SZ_ynkk0hxPNM",
  authDomain: "performance-gear.firebaseapp.com",
  projectId: "performance-gear",
  storageBucket: "performance-gear.firebasestorage.app",
  messagingSenderId: "755428081991",
  appId: "1:755428081991:web:da7cb853d8201d00d80c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;