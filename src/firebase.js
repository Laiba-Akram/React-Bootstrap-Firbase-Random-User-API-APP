import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDUI2RVPN54MAyugwC1_Qvj_TQCRQnpIYE",
  authDomain: "react-authentication-5fb41.firebaseapp.com",
  projectId: "react-authentication-5fb41",
  storageBucket: "react-authentication-5fb41.appspot.com",
  messagingSenderId: "831037599276",
  appId: "1:831037599276:web:32664137c679a42cbeab89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;