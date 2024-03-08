import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear, faPen } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../../firebase/config';
import { UpdateAccount, DeleteAccount } from '../../../components/Api';
import Button from '../../../components/Button';
import Modale from '../../../components/Modale';
import NavBottomBar from '../../../components/NavBottomBar';


export default function AccountScreen(props) {
    const account = props.route.params.account
    const [modalNameVisible, setModalNameVisible] = useState(false);
    const [modalBalanceVisible, setModalBalanceVisible] = useState(false);
    const [accountName, setAccountName] = useState(props.route.params.account.name);
    const [balance, setBalance] = useState(props.route.params.account.balance);

    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    const addToBalance = () => {
        UpdateAccount({ account: {...account, balance: parseFloat(balance)}, setModalVisible: setModalBalanceVisible, navigation: props.navigation });
    }

    const modifyName = () => {
        UpdateAccount({ account: {...account, name: accountName}, setModalVisible: setModalNameVisible, navigation: props.navigation });
    }

    const nameModalContent = (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Nouveau Nom</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAccountName(text)}
                    value={accountName}
                    autoCapitalize="none"
                />
                <Button title="Sauvegarder" onPress={() => modifyName()} style={styles.btnAddBalance} textStyle={styles.textStyle} />
            </View>
        </View>
    );

    const balanceModalContent = (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Nouveau Solde</Text>
                <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setBalance(text)}
                    value={balance.toString()}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button title="Sauvegarder" onPress={() => addToBalance()} style={styles.btnAddBalance} textStyle={styles.textStyle} />
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
                    <View style={styles.viewRow}>
                        <Text style={styles.accountText} >Nom : {account.name}</Text>
                        <TouchableOpacity onPress={() => setModalNameVisible(true)} style={styles.penTouchable}>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIconPen} size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.accountText} >Solde : {account.balance} €</Text>
                        <TouchableOpacity onPress={() => setModalBalanceVisible(true)} style={styles.penTouchable}>
                            <FontAwesomeIcon icon={faPen} style={styles.buttonIconPen} size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button title="Supprimer" onPress={() => DeleteAccount({accountId: account.id, navigation: props.navigation}) } style={styles.btnDelete} textStyle={styles.textStyle} />
                {Modale(modalBalanceVisible, setModalBalanceVisible, balanceModalContent)}
                {Modale(modalNameVisible, setModalNameVisible, nameModalContent)}
            </KeyboardAwareScrollView>
        </View>
        <NavBottomBar navigation={props.navigation} />
        </>
    );
}