import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCue-AJchhCW6Mkd4FFnEcPd8xkyGMwK5I",
  authDomain: "react-apps-email-password.firebaseapp.com",
  projectId: "react-apps-email-password",
  storageBucket: "react-apps-email-password.appspot.com",
  messagingSenderId: "682529823160",
  appId: "1:682529823160:web:3e1474cc77836b9720974d",
  measurementId: "G-D75JS5N41G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };