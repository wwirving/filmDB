import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAi0PSv6Zg5jPN5_6hjRozIVA__obd3PnE",
    authDomain: "filmdb-8a9df.firebaseapp.com",
    projectId: "filmdb-8a9df",
    storageBucket: "filmdb-8a9df.appspot.com",
    messagingSenderId: "247330012607",
    appId: "1:247330012607:web:b96fd39b1b3afcf8c8350a",
    measurementId: "G-73N0HK93WJ"
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
