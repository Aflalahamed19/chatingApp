import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d4837.firebaseapp.com",
  projectId: "reactchat-d4837",
  storageBucket: "reactchat-d4837.appspot.com",
  messagingSenderId: "766751923957",
  appId: "1:766751923957:web:1d3800dd617ab687fbafbc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);