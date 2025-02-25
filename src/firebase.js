// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ZrBxBhH19qSId69D-o2YPTp9GXQxIFA",
  authDomain: "medicareapp-11c2a.firebaseapp.com",
  projectId: "medicareapp-11c2a",
  storageBucket: "medicareapp-11c2a.firebasestorage.app",
  messagingSenderId: "693555754203",
  appId: "1:693555754203:web:94f0e6917160aeaef808fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
