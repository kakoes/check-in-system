import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYcBPhDrd64Kka2pOmCq_rT9Aav3MdPNc",
  authDomain: "check-in-2e042.firebaseapp.com",
  projectId: "check-in-2e042",
  storageBucket: "check-in-2e042.firebasestorage.app",
  messagingSenderId: "262846888650",
  appId: "1:262846888650:web:5e0bd29e7b18f3ae425233",
  measurementId: "G-2KG32GXP63"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
