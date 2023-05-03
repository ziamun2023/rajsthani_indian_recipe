// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL1Uj9kwywFYc-Fju0AWtTLuhxAH20pjA",
  authDomain: "rajsthani-delights-web.firebaseapp.com",
  projectId: "rajsthani-delights-web",
  storageBucket: "rajsthani-delights-web.appspot.com",
  messagingSenderId: "786073872080",
  appId: "1:786073872080:web:cc28935e359cf53c9ce0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app