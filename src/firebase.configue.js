// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGFcRErWq6Q7QyrvE6m_3guG_qjOL39DI",
  authDomain: "reduxshopifyapp.firebaseapp.com",
  projectId: "reduxshopifyapp",
  storageBucket: "reduxshopifyapp.appspot.com",
  messagingSenderId: "1097751882435",
  appId: "1:1097751882435:web:7ef8d2b41664c6665bd076",
  measurementId: "G-HQJYS5PT4P"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export default firebaseConfig
