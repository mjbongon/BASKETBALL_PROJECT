// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOL8wS1xTF3qwDKNvDyouiYwN1bOLsbYc",
  authDomain: "basketball-32d77.firebaseapp.com",
  projectId: "basketball-32d77",
  storageBucket: "basketball-32d77.appspot.com",
  messagingSenderId: "620490350691",
  appId: "1:620490350691:web:9eb395ea8a0be539fb1856"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
