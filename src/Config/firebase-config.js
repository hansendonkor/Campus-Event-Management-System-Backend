// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPOJE9_HoIX8NSlAyruCXs1n2f0kXfq78",
  authDomain: "campus-event-management-22d51.firebaseapp.com",
  projectId: "campus-event-management-22d51",
  storageBucket: "campus-event-management-22d51.firebasestorage.app",
  messagingSenderId: "901570867523",
  appId: "1:901570867523:web:3e79c8b67f04a085c1bff6",
  measurementId: "G-9ZS56F71RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
