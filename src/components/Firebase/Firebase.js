// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEEl4V3ya0OCbFPQnHskA5Qt-CsdZOk4",
  authDomain: "job-task-supperhero.firebaseapp.com",
  projectId: "job-task-supperhero",
  storageBucket: "job-task-supperhero.appspot.com",
  messagingSenderId: "1061919452442",
  appId: "1:1061919452442:web:a21c1b53e23647dd9c50a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;