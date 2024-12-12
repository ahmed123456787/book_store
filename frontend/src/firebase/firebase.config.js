// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsXGYSWzni3xGI_m6w80-QLWRVbq6_LKk",
  authDomain: "book-store-976c0.firebaseapp.com",
  projectId: "book-store-976c0",
  storageBucket: "book-store-976c0.firebasestorage.app",
  messagingSenderId: "370191228316",
  appId: "1:370191228316:web:f7ea2f5c9816fe5d6a7c59",
  measurementId: "G-Y9PKD73ZZL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
