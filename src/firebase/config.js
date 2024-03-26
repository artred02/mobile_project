import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqY2aI-3UfvDCQcQGduuDMjS1tOCWVO44",
    authDomain: "mobileproject-d77de.firebaseapp.com",
    databaseURL: "https://mobileproject-d77de-default-rtdb.firebaseio.com",
    projectId: "mobileproject-d77de",
    storageBucket: "mobileproject-d77de.appspot.com",
    messagingSenderId: "376553348599",
    appId: "1:376553348599:web:d7e7bec0fa1486a4d2a2f2",
    measurementId: "G-X81XKDGMYQ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };