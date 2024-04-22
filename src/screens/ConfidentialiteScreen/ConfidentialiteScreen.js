import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { faPen } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Modale from '../../../components/Modale';
import NavBottomBar from '../../../components/NavBottomBar';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../../components/Button';

const reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
}


export default function ConfidentialiteScreen(props) {
    const [email, setEmail ] = useState(props.extraData.email);
    const [password, setPassword ] = useState(props.extraData.password);
    const [ModaleVisibleName, setModaleVisibleName] = useState(false);
    const [ModaleVisiblemail, setModaleVisiblemail] = useState(false);
    const [ModaleVisiblePassword, setModaleVisiblePassword] = useState(false);
    const [newFullName, setNewFullName] = useState(props.extraData.fullName);
    
    const changeEmail = (currentPassword, newEmail) => {
        reauthenticate(currentPassword).then(() => {
            var user = firebase.auth().currentUser;
            user.updateEmail(newEmail).then(() => {
                console.log("Email updated!");
            }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
        firebase.auth().currentUser.updateEmail(newEmail)
            .then(() => {
                console.log('Email modifié avec succès.');
                firebase.firestore().collection('users').doc(props.extraData.id).update({
                    email: newEmail
                })
                .then(() => {
                    console.log('Email modifié dans Firestore.');
                    setEmail(newEmail);
                    props.extraData.email = newEmail;
                    setModaleVisiblemail(false);
                })
                .catch(error => {
                    console.error('Erreur lors de la modification de l\'email dans Firestore :', error);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la modification de l\'email via Firebase Auth :', error);
            });
    };

    const modifyName = () => {
        firebase.firestore().collection('users').doc(props.extraData.id).update({
            fullName: newFullName
        })
        .then(() => {
            console.log('Nom d\'utilisateur modifié avec succès.');
            setNewFullName(newFullName);
            props.extraData.fullName = newFullName;
            setModaleVisibleName(false); 
        })
        .catch(error => {
            console.error('Erreur lors de la modification du nom d\'utilisateur :', error);
        });
    };

    changePassword = (currentPassword, newPassword) => {
        this.reauthenticate(currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            console.log("Password updated!");
            setModaleVisiblePassword5(false);
          }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
      }


    const handleFullNameChange = (text) => {
        setNewFullName(text); 
    };

    const handleEmailChange = (text) => {
        setEmail(text); 
    };
    const handlePasswordChange = (text) => {
        setPassword(text); 
    };

    useEffect(() => {
        setNewFullName(props.extraData.fullName);
    }, [props.extraData.fullName]);

    const nameModalContent = (
        <View id='name' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Changer le nom d'utilisateur</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleFullNameChange(text)}
                    value={newFullName}
                    autoCapitalize="none"
                />

                <Button title="Sauvegarder" onPress={() => modifyName()} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    
    const mailModalContent = (
        <View id='mail' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Changer l'adresse Email</Text>
                
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleEmailChange(text)}
                    value={email}
                    autoCapitalize="none"
                />
                <Button title="Sauvegarder" onPress={() => changeEmail(props.extraData.currentPassword, email)} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    const passwordModalContent = (
        <View id='mail' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Changer le mot de passe</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handlePasswordChange(text)}
                    placeholder='*********'
                    autoCapitalize="none"
                />
                <Button title="Sauvegarder" onPress={() => changePassword(props.extraData.currentPassword, password)} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    


    return (
        <>
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={styles.scrollView}
                    keyboardShouldPersistTaps="always"
                >
                    <View style={styles.header}>
                        <Text style={styles.headerTxt}>Confidentialité</Text>
                    </View>
                    <TouchableOpacity onPress={() => setModaleVisibleName(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Nom d'utilisateur :</Text>
                            <Text style={styles.bodyText}>{newFullName}</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisibleName, setModaleVisibleName, nameModalContent)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModaleVisiblemail(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Email :</Text>
                            <Text style={styles.bodyText}>{email}</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisiblemail, setModaleVisiblemail, mailModalContent)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModaleVisiblePassword(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Mot de passe :</Text>
                            <Text style={styles.bodyText}>*********</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisiblePassword, setModaleVisiblePassword, passwordModalContent)}
                        </View>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
            <View style={styles.navbar}>
                <NavBottomBar navigation={props.navigation} />
            </View>
        </>
    )
}
