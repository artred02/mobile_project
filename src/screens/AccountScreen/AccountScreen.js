import React, { useState } from 'react';
import { styles, Colors } from './styles';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
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
    const colors = Colors(props.theme);
    
    const addToBalance = () => {
        UpdateAccount({ account: {...account, balance: parseFloat(balance)}, setModalVisible: setModalBalanceVisible, navigation: props.navigation });
    }

    const modifyName = () => {
        UpdateAccount({ account: {...account, name: accountName}, setModalVisible: setModalNameVisible, navigation: props.navigation });
    }

    const RibNavigation = () => {
        props.navigation.navigate('Rib', {account: account});
    };


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
        <View style={[styles.container, colors.container]}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <Header title={"Compte"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
                <View style={[styles.card,colors.card]}>
                    <TouchableOpacity onPress={() => setModalNameVisible(true)}>
                        <Text style={styles.accountsTitle} >{account.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.balance} onPress={() => setModalBalanceVisible(true)} >{account.balance} €</Text>
                    <TouchableOpacity>
                        <Text selectable={true} style={styles.iban} >{account.iban}</Text>
                    </TouchableOpacity>
                    <View style={styles.lastOperations}>
                        <Text style={styles.lastOperationsTitle}>Dernières opérations</Text>
                        <Text style={styles.lastOperationsText}>Aucune opération</Text>
                    </View>                    
                </View>
                <Text style={[styles.TitleSection,colors.TitleSection]}>Raccourcis</Text>
                <View style={[styles.ibanPdf,colors.ibanPdf]}>
                    <TouchableOpacity onPress={RibNavigation}>
                        <FontAwesomeIcon icon={faIdCard} size={30} style={styles.fontAwesomeIcon} color='white'/>
                        <Text style={styles.ibanPdfText}>Partager mon RIB</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Supprimer" onPress={() => DeleteAccount({accountId: account.id, navigation: props.navigation}) } style={styles.btnDelete} textStyle={styles.textStyle} />
                {Modale(modalBalanceVisible, setModalBalanceVisible, balanceModalContent)}
                {Modale(modalNameVisible, setModalNameVisible, nameModalContent)}
            </KeyboardAwareScrollView>
        </View>
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    );
}