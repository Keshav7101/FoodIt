import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAD4jB9kI2EWUabSze_TpLmBRuQDKG3VKQ",
    authDomain: "login-demo-58737.firebaseapp.com",
    projectId: "login-demo-58737",
    storageBucket: "login-demo-58737.appspot.com",
    messagingSenderId: "824282296987",
    appId: "1:824282296987:web:374111413bc8bec24c4c3e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };