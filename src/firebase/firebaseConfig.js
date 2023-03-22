// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTMQh3KXYcs18WVeeaA5ArQJP9VMKUD9k",
  authDomain: "taskr-462d6.firebaseapp.com",
  projectId: "taskr-462d6",
  storageBucket: "taskr-462d6.appspot.com",
  messagingSenderId: "557250519260",
  appId: "1:557250519260:web:e3dd781a0188c5f30e5419",
  measurementId: "G-328HLXG2BD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
