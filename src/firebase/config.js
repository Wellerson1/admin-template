import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "admin-template-well.appspot.com",
    messagingSenderId: "1081175775253",
    appId: "1:1081175775253:web:cca2e6160a10e72c8a961c"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebase)
}

export default firebase