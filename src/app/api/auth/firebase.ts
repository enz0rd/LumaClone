// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKfraHKprcJ6eIML6N6xtP0sPvWDer8E",
  authDomain: "lumaclone.firebaseapp.com",
  projectId: "lumaclone",
  storageBucket: "lumaclone.firebasestorage.app",
  messagingSenderId: "158722001737",
  appId: "1:158722001737:web:e94f356bcb9f7cd395a898",
  measurementId: "G-LX2NFT5KL2"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };