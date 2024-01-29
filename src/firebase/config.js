import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBHr7ENFZthYaWX2LfL5SR94c2MoF1Zamg',
    authDomain: 'mobileproject-d77de.firebaseapp.com',
    projectId: 'mobileproject-d77de',
    appId: '1:376553348599:android:7c377400244a8145d2a2f2',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };