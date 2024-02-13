import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { query } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import NavBottomBar from '../../../components/NavBottomBar';

export default function ConfidentialiteScreen(props) {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const objectsRef = firebase.firestore().collection('objects');
        const q = query(objectsRef);
        q.onSnapshot((snapshot) => {
            const objects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setObjects(objects);
        });
    }, []);

    changePassword = (currentPassword, newPassword) => {
        this.reauthenticate(currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            console.log("Password updated!");
          }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
      }
      changeEmail = (currentPassword, newEmail) => {
        this.reauthenticate(currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updateEmail(newEmail).then(() => {
            console.log("Email updated!");
          }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
      }
    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
        return user.reauthenticateWithCredential(cred);
    }

    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Confidentialite</Text>
                </View>
                
            </KeyboardAwareScrollView>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}