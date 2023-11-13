// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { NEXT_PUBLILC_FIREBASE_API_KEY, NEXT_PUBLILC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLILC_FIREBASE_PROJECT_ID, NEXT_PUBLILC_FIREBASE_STORAGE_BUCKET, NEXT_PUBLILC_FIREBASE_MESSAGING_SENDER_ID, NEXT_PUBLILC_FIREBASE_APP_ID } from ".env.local";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: NEXT_PUBLILC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLILC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLILC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLILC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLILC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLILC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);