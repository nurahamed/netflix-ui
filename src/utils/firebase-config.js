
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCziJIuZ7ETV6YswF3EmUUZ06fIH_kUnV4",
  authDomain: "react-netflix-clone-a46d5.firebaseapp.com",
  projectId: "react-netflix-clone-a46d5",
  storageBucket: "react-netflix-clone-a46d5.appspot.com",
  messagingSenderId: "1059407573696",
  appId: "1:1059407573696:web:ad3e28c6a1001618457325",
  measurementId: "G-0VMTH125ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const firebaseAuth = getAuth(app);