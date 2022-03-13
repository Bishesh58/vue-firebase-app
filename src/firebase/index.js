// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANQhdSK89WMZSkZFiZCmkezk9rqkUZNY",
  authDomain: "vue-app-3cbf5.firebaseapp.com",
  projectId: "vue-app-3cbf5",
  storageBucket: "vue-app-3cbf5.appspot.com",
  messagingSenderId: "680758365828",
  appId: "1:680758365828:web:ebb012cc8010aa9107bcd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
