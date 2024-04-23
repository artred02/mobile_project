import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { UpdateAccount, DeleteAccount } from '../../../components/Api';
import Button from '../../../components/Button';
import Modale from '../../../components/Modale';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';


export default function AccountScreen(props) {
    const account = props.route.params.account
    const [modalNameVisible, setModalNameVisible] = useState(false);
    const [modalBalanceVisible, setModalBalanceVisible] = useState(false);
    const [accountName, setAccountName] = useState(props.route.params.account.name);
    const [balance, setBalance] = useState(props.route.params.account.balance);

    const addToBalance = () => {
        UpdateAccount({ account: {...account, balance: parseFloat(balance)}, setModalVisible: setModalBalanceVisible, navigation: props.navigation });
    }

    const modifyName = () => {
        UpdateAccount({ account: {...account, name: accountName}, setModalVisible: setModalNameVisible, navigation: props.navigation });
    }

    const nameModalContent = (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Modifier le nom :</Text>
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
                <Text style={styles.modalText}>Modifier le solde :</Text>
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
                <Header title={"Compte"} navigation={props.navigation} setUser={props.setUser} />
                <View style={styles.card}>
                    <TouchableOpacity onPress={() => setModalNameVisible(true)}>
                        <Text style={styles.accountsTitle} >{account.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.balance} onPress={() => setModalBalanceVisible(true)} >{account.balance} €</Text>
                    <TouchableOpacity>
                        <Text selectable={true} style={styles.iban} >{account.iban}</Text>
                    </TouchableOpacity>
                    <Text style={styles.separation}>_________________________________________</Text>
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