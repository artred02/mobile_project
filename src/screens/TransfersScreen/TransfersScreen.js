import React, { useEffect, useState, useCallback } from 'react';
import { View, TextInput, Text, FlatList, RefreshControl, Pressable } from 'react-native';
import { AddBeneficiary, GetAccountsList, GetBeneficiaries, MakeNewOpe } from '../../../components/Api';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { styles, Colors } from './styles';
import Modale from '../../../components/Modale';

export default function TransfersScreen(props) {
    const [iban, setIban] = useState('');
    const [bic, setBic] = useState('');
    const [accountName, setAccountName] = useState('');
    const colors = Colors(props.theme);
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [seeBeneficiaryForm, setSeeBeneficiaryForm] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [Ammount, setAmmount] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [accNameIn, setAccNameIn] = useState('Compte à débiter');
    const [accNameOut, setAccNameOut] = useState('Compte à créditer');
    const [GetListMyAcc, setListMyAcc] = useState([]);
    const [accIdIn, setAccIdIn] = useState([]);
    const [accIdOut, setAccIdOut] = useState([]);
    const [myAccModale, setMyAccModale] = useState(false);
    const [benefAccModale, setBenefAccModale] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            GetListBeneficiaries();
            setRefreshing(false);
        }, 1000);
    }, []);

    useEffect(() => {
        GetListBeneficiaries();
        GetAccountsList({ userId: props.extraData.id, setAccounts: setListMyAcc });
    }, []);

    const addAccountOnTransfers = (accountName, iban, bic) => {
        AddBeneficiary({ userId: props.extraData.id, name: accountName, iban: iban, bic: bic });
        setSeeBeneficiaryForm(false);
    }

    const GetListBeneficiaries = () => {
        GetBeneficiaries({ userId: props.extraData.id, setBeneficiaries: setBeneficiaries });
    }

    const AddBeneficiaryForm = (
        <View style={styles.containerViewModale}>
            <TextInput
                style={[styles.input, colors.input]}
                placeholder='IBAN'
                onChangeText={(text) => setIban(text)}
                value={iban}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <View style={styles.input_double_view}>
                <TextInput
                    style={[styles.input_double, colors.input]}
                    placeholder='BIC'
                    onChangeText={(text) => setBic(text)}
                    value={bic}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={[styles.input_double, colors.input]}
                    placeholder='Nom du compte'
                    onChangeText={(text) => setAccountName(text)}
                    value={accountName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
            </View>
            <Button title="Ajouter" onPress={() => addAccountOnTransfers(accountName, iban, bic)} style={[styles.btnAddBalance, colors.btnAddBalance]} textStyle={[styles.textStyle, colors.textStyle]} />
        </View>
    );



    const setVisibility = (text) => {
        if (text !== '') {
            setIsVisible(true);
            setAmmount(text);
        } else {
            setIsVisible(false);
        }
    }

    const listMyAcc = (
        <FlatList
            data={GetListMyAcc}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
                <Pressable onPress={() => { setAccNameIn(item.name); setAccIdIn(item.id); setMyAccModale(false) }}>
                    <Text style={styles.title}>{item.name}</Text>
                </Pressable>
            )}
        />
    );

    const listMyBeneficiaries = (
        <FlatList
            data={GetListMyAcc}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
                <Pressable onPress={() => {setAccNameOut(item.name); setAccIdOut(item.id); setBenefAccModale(false)}}>
                    <Text style={styles.title}>{item.name}</Text>
                </Pressable>
            )}
        />
    );

    const ValidateVirement = () => {
        if (accIdIn === '' || accIdOut === '') {
            alert('Veuillez sélectionner un compte à débiter et un compte à créditer');
        } else if (accIdIn === accIdOut) {
            alert('Virement impossible');
        } else if (isNaN(Ammount) || Ammount === 0) {
            alert('Veuillez entrer un montant valide');
        } else {
            MakeNewOpe({ IdAccountSource: accIdIn, IdAccountTarget: accIdOut, amount: Ammount, type: 'virement' })
        }
    }

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
            <Button title={"Ajouter un bénéficiaire"} onPress={() => setSeeBeneficiaryForm(true)} style={[styles.btnAddBalance, colors.btnAddBalance]} textStyle={[styles.textStyle, colors.textStyle]} />
            <View style={styles.containerView}>
                <Text style={[styles.title, colors.benefTitle]}>Je fais un virement de</Text>
            </View>
            <TextInput
                style={[styles.montant, colors.montant]} 
                placeholder='0,00 €'
                onChangeText={(text) => setVisibility(text)}
                placeholderTextColor={colors.montant.color}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            {isVisible ? (
                <View style={styles.containerViewHide} visible={isVisible}>
                    <Button title={accNameIn} onPress={() => setMyAccModale(true)} style={[styles.btnAccountSelect, colors.btnAccountSelect]} textStyle={[styles.textStyle, colors.textStyle]} />
                    <Button title={accNameOut} onPress={() => setBenefAccModale(true)} style={[styles.btnAccountSelect, colors.btnAccountSelect]} textStyle={[styles.textStyle, colors.textStyle]} />
                    <Button title={"Valider"} onPress={() => {ValidateVirement()}} style={[styles.btnAccountSelect, colors.btnAccountSelect]} textStyle={[styles.textStyle, colors.textStyle]} />
                </View>
            ) : null}
        </View>
        {Modale(seeBeneficiaryForm, setSeeBeneficiaryForm, AddBeneficiaryForm)}
        {Modale(myAccModale, setMyAccModale, listMyAcc)}
        {Modale(benefAccModale, setBenefAccModale, listMyBeneficiaries)}
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    )
}