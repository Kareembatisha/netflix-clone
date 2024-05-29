import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiQUmAWVDOsQ1uYyX1oMlRu6JuQfgLTX4",
  authDomain: "netflix-clone-bf73e.firebaseapp.com",
  projectId: "netflix-clone-bf73e",
  storageBucket: "netflix-clone-bf73e.appspot.com",
  messagingSenderId: "1017027458461",
  appId: "1:1017027458461:web:a8b5b403f2ec24b96a2b74",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
