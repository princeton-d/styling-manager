import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBM59RG6hJfW4jacx0T2l0K3-N59w91y10",
  authDomain: "styling-manager-9b437.firebaseapp.com",
  projectId: "styling-manager-9b437",
  storageBucket: "styling-manager-9b437.appspot.com",
  messagingSenderId: "440738531799",
  appId: "1:440738531799:web:c856657fbd5a92adca6392"
};


const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const googleLoginProvider = new GoogleAuthProvider();
export default initializeApp(firebaseConfig);