// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDZOMz0iiERHFLvW1gwwdR_aT-m2Utsmgg",
	authDomain: "fc-bloging.firebaseapp.com",
	projectId: "fc-bloging",
	storageBucket: "fc-bloging.firebasestorage.app",
	messagingSenderId: "1097194961325",
	appId: "1:1097194961325:web:449292d86c8ebdff6a0924",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
