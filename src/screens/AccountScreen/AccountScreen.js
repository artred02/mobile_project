import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../../firebase/config';
import Button from '../../../components/Button';
import Modale from '../../../components/Modale';
import NavBottomBar from '../../../components/NavBottomBar';


export default function AccountScreen(props) {
    const account = props.route.params.account
    const [modalVisible, setModalVisible] = useState(false);

    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    const modalContent = (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Nouveau Solde</Text>
                <TextInput></TextInput>
                <Button title="Ajouter" onPress={() => setModalVisible(!modalVisible)} style={styles.btnAddBalance} textStyle={styles.textStyle} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={logout} 
                        style={styles.logoutTouchable}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} style={styles.buttonIcon} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={parametre} style={styles.parametreTouchable}>
                        <FontAwesomeIcon icon={faGear} style={styles.buttonIcon} size={25}/>
                    </TouchableOpacity>
                </View>                
                <Text style={styles.accountsTitle} >Account:</Text>
                <View style={styles.account} >
                    <Text style={styles.accountText} >Nom : {account.AccountName}</Text>
                    <Text style={styles.accountText} >Solde : {account.balance} €</Text>
                    <Button title="Ajouter du solde" onPress={() => setModalVisible(true)} style={styles.btnAddBalance} textStyle={styles.textStyle} />
                </View>
                {Modale(modalVisible, setModalVisible, modalContent)}
            </KeyboardAwareScrollView>
            <NavBottomBar navigation={props.navigation} />
        </View>
    );
}