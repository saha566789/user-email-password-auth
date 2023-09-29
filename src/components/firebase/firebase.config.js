// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRWPIXB_DdP8Kjr1pDMTJnvCqwaQ4yHLA",
  authDomain: "user-email-password-auth-653dd.firebaseapp.com",
  projectId: "user-email-password-auth-653dd",
  storageBucket: "user-email-password-auth-653dd.appspot.com",
  messagingSenderId: "658244609371",
  appId: "1:658244609371:web:d315f2716b8fda53fc267e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;