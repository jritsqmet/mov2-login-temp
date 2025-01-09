import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdlq71X9a3ZA65q4_sn9FZjyfJZakXDgA",
  authDomain: "app-angular-6331a.firebaseapp.com",
  databaseURL: "https://app-angular-6331a-default-rtdb.firebaseio.com",
  projectId: "app-angular-6331a",
  storageBucket: "app-angular-6331a.appspot.com",
  messagingSenderId: "183868396031",
  appId: "1:183868396031:web:1a1748a764f9ae9e1997ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)