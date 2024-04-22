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

export default function ConfidentialiteScreen(props) {
    const [email, setEmail ] = useState(props.extraData.email);
    const [ModaleVisible, setModaleVisible] = useState(false);
    const [newFullName, setNewFullName] = useState(props.extraData.fullName);

    const modifyName = () => {
        firebase.firestore().collection('users').doc(props.extraData.id).update({
            fullName: newFullName
        })
        .then(() => {
            console.log('Nom d\'utilisateur modifié avec succès.');
            setModaleVisible(false); 
        })
        .catch(error => {
            console.error('Erreur lors de la modification du nom d\'utilisateur :', error);
        });
    };

    const handleFullNameChange = (text) => {
        setNewFullName(text); 
    };

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
                <Button title="Sauvegarder" onPress={modifyName} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    
    const mailModalContent = (
        <View id='mail' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Changer l'adresse Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleFullNameChange(text)}
                    value={email}
                    autoCapitalize="none"
                />
                <Button title="Sauvegarder" onPress={modifyName} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    

    useEffect(() => {
        setNewFullName(props.extraData.fullName);
    }, [props.extraData.fullName]);

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
                    <TouchableOpacity onPress={() => setModaleVisible(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Nom d'utilisateur :</Text>
                            <Text style={styles.bodyText}>{newFullName}</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisible, setModaleVisible, nameModalContent)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModaleVisible(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Email :</Text>
                            <Text style={styles.bodyText}>{email}</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisible, setModaleVisible, mailModalContent)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModaleVisible(true)}>
                        <View style={styles.information}>
                            <Text style={styles.title}>Mot de passe :</Text>
                            <Text style={styles.bodyText}>*********</Text>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15} />
                            {Modale(ModaleVisible, setModaleVisible, nameModalContent)}
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
