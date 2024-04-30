import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Appearance, ColorSchemeName, useColorScheme} from 'react-native';
import { AddBeneficiary, GetBeneficiaries } from '../../../components/Api';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import AccountScreen from '../AccountScreen/AccountScreen';
import { styles, Colors } from './styles';

export default function TransfersScreen(props) {
    const [iban, setIban] = useState('');
    const [bic, setBic] = useState('');
    const [accountName, setAccountName] = useState('');
    const colors = Colors(props.theme);
    const [beneficiaries, setBeneficiaries] = useState([]);

    useEffect(() => {
        console.log(props.theme);
    }, []);

    const addAccountOnTransfers = (accountName, iban, bic) => {
        AddBeneficiary({ userId: props.extraData.id, accountName: accountName, iban: iban, bic: bic });
    }

    const GetListBeneficiaries = () => {
        GetBeneficiaries({ userId: props.extraData.id, setBeneficiaries: setBeneficiaries });
    }

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <View style={[styles.containerView, colors.containerView]}>
                <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
                <TextInput
                    style={[styles.input, colors.input]}
                    placeholder='Nom du compte'
                    onChangeText={(text) => setAccountName(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={[styles.input, colors.input]}
                    placeholder='IBAN'
                    onChangeText={(text) => setIban(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={[styles.input, colors.input]}
                    placeholder='BIC'
                    onChangeText={(text) => setBic(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button title="Ajouter" onPress={() => addAccountOnTransfers(accountName, iban, bic)} style={[styles.btnAddBalance, colors.btnAddBalance]} textStyle={[styles.textStyle, colors.textStyle]} />
            </View>
        </View>
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    )
}