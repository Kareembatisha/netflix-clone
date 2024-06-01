import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiQUmAWVDOsQ1uYyX1oMlRu6JuQfgLTX4",
  authDomain: "netflix-clone-bf73e.firebaseapp.com",
  projectId: "netflix-clone-bf73e",
  storageBucket: "netflix-clone-bf73e.appspot.com",
  messagingSenderId: "1017027458461",
  appId: "1:1017027458461:web:a8b5b403f2ec24b96a2b74",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
