import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Appearance, ColorSchemeName, useColorScheme} from 'react-native';
import { AddBeneficiary, GetBeneficiaries } from '../../../components/Api';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import styles_global from '../../../assets/styles_global';
import styles from './styles';
import AccountScreen from '../AccountScreen/AccountScreen';

export default function TransfersScreen(props) {
    const [iban, setIban] = useState('');
    const [bic, setBic] = useState('');
    const [accountName, setAccountName] = useState('');
    const [beneficiaries, setBeneficiaries] = useState([]);

    useEffect(() => {
        console.log(props);
    }, []);

    const addAccountOnTransfers = (accountName, iban, bic) => {
        AddBeneficiary({ userId: props.extraData.id, accountName: accountName, iban: iban, bic: bic });
    }

    const GetListBeneficiaries = () => {
        GetBeneficiaries({ userId: props.extraData.id, setBeneficiaries: setBeneficiaries });
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.containerView}>
                <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} />
                <TextInput
                    style={styles.input}
                    placeholder='Nom du compte'
                    onChangeText={(text) => setAccountName(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='IBAN'
                    onChangeText={(text) => setIban(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='BIC'
                    onChangeText={(text) => setBic(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button title="Ajouter" onPress={() => addAccountOnTransfers(accountName, iban, bic)} style={styles.btnAddBalance} textStyle={styles.textStyle} />
            </View>
        </View>
        <NavBottomBar navigation={props.navigation} />
        </>
    )
}