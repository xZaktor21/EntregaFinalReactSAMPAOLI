import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMQvUNLKmIjYfbF8JCnFYvWlD4gThUY7g",
  authDomain: "store21-63132.firebaseapp.com",
  projectId: "store21-63132",
  storageBucket: "store21-63132.appspot.com",
  messagingSenderId: "741303505837",
  appId: "1:741303505837:web:6085f7a0404b344a768724"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);