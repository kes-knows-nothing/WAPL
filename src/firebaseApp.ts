// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRiStsOvItSepYVgf90RfA_AQW7mQeoaY",
  authDomain: "portfolio-3b4ce.firebaseapp.com",
  projectId: "portfolio-3b4ce",
  storageBucket: "portfolio-3b4ce.appspot.com",
  messagingSenderId: "71842590052",
  appId: "1:71842590052:web:1738bd0c5a3108a88a9e71",
  measurementId: "G-TSRG2ZJZPR",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
