import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/database'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBM59RG6hJfW4jacx0T2l0K3-N59w91y10",
  authDomain: "styling-manager-9b437.firebaseapp.com",
  projectId: "styling-manager-9b437",
  storageBucket: "styling-manager-9b437.appspot.com",
  messagingSenderId: "440738531799",
  appId: "1:440738531799:web:c856657fbd5a92adca6392"
};

export const app = initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const googleLoginProvider = new GoogleAuthProvider();