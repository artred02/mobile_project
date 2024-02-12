import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View,Button,Modal, Pressable } from 'react-native'
import { firebase } from '../../firebase/config'
import { collection, query, where } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import NavBottomBar from '../../../components/NavBottomBar'

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
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Paramètres</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.information}>
                        <Text style={styles.title}>Mes Informations</Text>
                        <Text style={styles.bodyTxt}>Nom : {props.extraData.fullName}</Text>
                        <Text style={styles.bodyTxt}>Email : {props.extraData.email}</Text>
                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </Pressable>
                    </View>
                </View>
                {/* <Text>Home Screen</Text>
                <Text>Nom : {props.extraData.fullName}</Text>
                <Text>Email : {props.extraData.email}</Text>

                <Text>Objects:</Text>
                {objects.map((object) => (
                    <View key={object.id}>
                        <Text>{object.name}</Text>
                        <Text>{object.value}</Text>
                    </View>
                ))} */}
                
            </KeyboardAwareScrollView>
        </View>
        
        
    )
}