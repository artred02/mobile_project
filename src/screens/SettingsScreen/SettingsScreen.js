import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View,Button,Modal, Pressable } from 'react-native'
import { firebase } from '../../firebase/config'
import { collection, query, where } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faUser, faGear } from '@fortawesome/free-solid-svg-icons/';
import NavBottomBar from '../../../components/NavBottomBar';

export default function SettingsScreen(props) {
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

    const confidentialite = () => {
        props.navigation.navigate('Confidentialite')
    }

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
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Paramètres</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Mes Informations</Text>
                    <TouchableOpacity onPress={confidentialite}>
                        <View style={styles.information}>
                            <FontAwesomeIcon icon={faGear} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Confidentialité</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}