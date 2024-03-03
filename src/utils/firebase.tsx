import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhge8B-QCyX95DGcX3GnqF-lZzDqcohoE",
  authDomain: "dashbord-5689b.firebaseapp.com",
  projectId: "dashbord-5689b",
  storageBucket: "dashbord-5689b.appspot.com",
  messagingSenderId: "895811888415",
  appId: "1:895811888415:web:7601a9cd67fbd735d3fc2a",
  measurementId: "G-NMDS9TDBVM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googoleProvider = new GoogleAuthProvider();
export const Db = getFirestore();
