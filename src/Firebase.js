// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyClmpcm84boGTMClpTnty0lEHFWdpoL7nU",
  authDomain: "comsats-440a0.firebaseapp.com",
  projectId: "comsats-440a0",
  storageBucket: "comsats-440a0.appspot.com",
  messagingSenderId: "902695406412",
  appId: "1:902695406412:web:a9777b56917517e0b95de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();