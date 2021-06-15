import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEb0CUmAlp_x1PpwPNi2hjVzjYTSTh_GY",
  authDomain: "whatsapp-clone-28029.firebaseapp.com",
  projectId: "whatsapp-clone-28029",
  storageBucket: "whatsapp-clone-28029.appspot.com",
  messagingSenderId: "404271903020",
  appId: "1:404271903020:web:b8e8147c48fbb73b12bc89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
