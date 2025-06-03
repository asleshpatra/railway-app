// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyC3Uzoii3VkqhigIdpY-vA1To7DfFDGvgw",
authDomain: "railwaymapdashboard.firebaseapp.com",
projectId: "railwaymapdashboard",
storageBucket: "railwaymapdashboard.appspot.com", // corrected domain
messagingSenderId: "400341216638",
appId: "1:400341216638:web:246018b1cb4a420ae3572f",
measurementId: "G-8MXFS0GZH7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { analytics, db, storage };