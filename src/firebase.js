import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Web app's Firebase configuration
// Harsha
// const firebaseConfig = {
//     apiKey: "AIzaSyA2DCklwiliNeSGkSI0duMNpYP8tOJisi8",
//     authDomain: "road-repair-tracking-system.firebaseapp.com",
//     projectId: "road-repair-tracking-system",
//     storageBucket: "road-repair-tracking-system.appspot.com",
//     messagingSenderId: "583240128986",
//     appId: "1:583240128986:web:83691b47c44a6d3d8148e3"
// };

//kalyan
const firebaseConfig = {
    apiKey: "AIzaSyBcJ6NL-s2mLnqXi00bX-bKbhB69ztSzsA",
    authDomain: "rrts-d8083.firebaseapp.com",
    projectId: "rrts-d8083",
    storageBucket: "rrts-d8083.appspot.com",
    messagingSenderId: "559852312582",
    appId: "1:559852312582:web:a0513bde06f47c94448b87",
    measurementId: "G-64XJEV2LSH"
};
// const secondaryAppConfig = {
//     projectId: "supervisor-83892",
//     appId: "1:686005554701:web:3e6685c881802d2ba54f44",
//     apiKey: "AIzaSyAYwMmcgHdKoQhbRqvKJPBbXUEZBjGHyzk",
//     storageBucket: "supervisor-83892.appspot.com",
//     // databaseURL: "...",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const secondaryApp = initializeApp(secondaryAppConfig, "secondary");

// export const auth = getAuth(app, secondaryApp);
export const auth = getAuth(app);

export const db = getFirestore(app)