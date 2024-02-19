// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWi5IyYaqd9np4XYotj1OzGiUiTXlk7uM",
  authDomain: "cv-world-7671f.firebaseapp.com",
  projectId: "cv-world-7671f",
  storageBucket: "cv-world-7671f.appspot.com",
  messagingSenderId: "169571410432",
  appId: "1:169571410432:web:179ab1906450498025aee5",
  measurementId: "G-X51YMWX5N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);