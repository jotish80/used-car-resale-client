// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Koj8rFd7ygtcfkt6m_PDRcYnbFjw6GQ",
  authDomain: "used-cars-resale-client.firebaseapp.com",
  projectId: "used-cars-resale-client",
  storageBucket: "used-cars-resale-client.appspot.com",
  messagingSenderId: "1056992425761",
  appId: "1:1056992425761:web:ccb06f662637cd9a7a7060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;