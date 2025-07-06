import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgcOg7pnDo9NttAj7eKokjg0kg7rM8ApM",
  authDomain: "fir-app01-80424.firebaseapp.com",
  projectId: "fir-app01-80424",
  storageBucket: "fir-app01-80424.firebasestorage.app",
  messagingSenderId: "77038726973",
  appId: "1:77038726973:web:7f534afea564113dc19f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;