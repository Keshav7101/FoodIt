import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBnRmDDPFuMOtq4hu8NzE3b1lWrfDq0DU",
  authDomain: "login-demo-c17ee.firebaseapp.com",
  projectId: "login-demo-c17ee",
  storageBucket: "login-demo-c17ee.appspot.com",
  messagingSenderId: "180438949608",
  appId: "1:180438949608:web:1cd93326ffcba866e9335d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
