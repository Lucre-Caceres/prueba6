import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAi4DM50jbKTTltEBlm_rpHET0vXK6n0hs",
  authDomain: "primerproyectoreact-2ee07.firebaseapp.com",
  projectId: "primerproyectoreact-2ee07",
  storageBucket: "primerproyectoreact-2ee07.appspot.com",
  messagingSenderId: "159882698111",
  appId: "1:159882698111:web:2ac06b48ffd39cf40f0e4a"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;  
