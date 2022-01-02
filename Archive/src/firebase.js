import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZlwOMViaDQZB2LfWuvnDzwgU0g2KzTZM",
    authDomain: "phone-book-7adb7.firebaseapp.com",
    projectId: "phone-book-7adb7",
    storageBucket: "phone-book-7adb7.appspot.com",
    messagingSenderId: "352940417790",
    appId: "1:352940417790:web:97ab01e99833dbccfa7baf",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
