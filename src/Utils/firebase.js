// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUujCaZlCdrOACSp0VbvQ7reHl1pLgM78",
  authDomain: "netflix-gpt-clone-afe6d.firebaseapp.com",
  projectId: "netflix-gpt-clone-afe6d",
  storageBucket: "netflix-gpt-clone-afe6d.appspot.com",
  messagingSenderId: "830043220591",
  appId: "1:830043220591:web:5147fc5eeae211919afb9a",
  measurementId: "G-VC3HY49B8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();