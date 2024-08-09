// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjOntCYM8cOIBt110AMkEg6beZM9X9eBo",
  authDomain: "inventory-managment-4c87f.firebaseapp.com",
  projectId: "inventory-managment-4c87f",
  storageBucket: "inventory-managment-4c87f.appspot.com",
  messagingSenderId: "563947998270",
  appId: "1:563947998270:web:dcdae90e1c216aa2bf956f",
  measurementId: "G-GDXXNZNF7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);  // Corrected the variable name

export { firestore };  // Now it matches the variable name

