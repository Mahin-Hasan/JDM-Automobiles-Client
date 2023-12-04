// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBphTOLrRMRIGY4yVuASLIhh40rP5Y6EbE",
  authDomain: "jdm-automobiles.firebaseapp.com",
  projectId: "jdm-automobiles",
  storageBucket: "jdm-automobiles.appspot.com",
  messagingSenderId: "261617915844",
  appId: "1:261617915844:web:c2458afe8c1a1ef1f03691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;