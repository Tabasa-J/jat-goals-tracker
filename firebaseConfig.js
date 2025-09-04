
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfSTHjmK20HZXaT4mp4GxF7IgBoo7xiM8",
  authDomain: "jat-goal-tracker.firebaseapp.com",
  projectId: "jat-goal-tracker",
  storageBucket: "jat-goal-tracker.firebasestorage.app",
  messagingSenderId: "390842785545",
  appId: "1:390842785545:web:9f982f5ad0009c2dd7fdd8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)