// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBROWPr_4eIPnNpxZyYGPIIexu44qt8plg",
  authDomain: "fir-4e8d1.firebaseapp.com",
  projectId: "fir-4e8d1",
  storageBucket: "fir-4e8d1.firebasestorage.app",
  messagingSenderId: "1029811506775",
  appId: "1:1029811506775:web:bef91fecd5de9e40151d12",
  measurementId: "G-CL3JYTT4QW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };