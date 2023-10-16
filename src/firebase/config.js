import firebase from "firebase"
import { getFirestore } from "firebase/firestore";


const NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyASy1zX-K2PkzwoHEKLd-UbhoZCmhQiGJQ",
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="admin-template-well.firebaseapp.com",
NEXT_PUBLIC_FIREBASE_PROJECT_ID="admin-template-well"
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "admin-template-well.appspot.com",
  messagingSenderId: "1081175775253",
  appId: "1:1081175775253:web:cca2e6160a10e72c8a961c"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase