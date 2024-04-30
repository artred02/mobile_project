import React, { useEffect, useState, useCallback } from 'react';
import { View, TextInput, Text, FlatList, RefreshControl, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AddBeneficiary, GetBeneficiaries } from '../../../components/Api';
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
    const [ModaleVirement, setModaleVirement] = useState(false);
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [seeBeneficiaryForm, setSeeBeneficiaryForm] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const [targetAccount, setTargetAccount] = useState({});

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            GetListBeneficiaries();
            setRefreshing(false);
        }, 1000);
    }, []);

    useEffect(() => {
        GetListBeneficiaries();
    }, []);

    const addAccountOnTransfers = (accountName, iban, bic) => {
        AddBeneficiary({ userId: props.extraData.id, name: accountName, iban: iban, bic: bic });
        setSeeBeneficiaryForm(false);
    }

    const GetListBeneficiaries = () => {
        GetBeneficiaries({ userId: props.extraData.id, setBeneficiaries: setBeneficiaries });
    }
    
    const Item = ({ benef }) => (
        <View style={styles.benefCard}>
            <Text style={colors.benefTitle}>{benef.name}</Text>
        </View>
    );

    const beginTransfert = (targetAccount) => {
        setTargetAccount(targetAccount);
        setModaleVirement(true);
    }

    const makeTransfertModale = (
        <View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
                style={styles.picker}
            />
            <Button title="Valider" onPress={() =>makeTransfert} style={[styles.btnAddBalance, colors.btnAddBalance]} textStyle={[styles.textStyle, colors.textStyle]} />
        </View>
    )

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

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
            <Button title={"Ajouter un bénéficiaire"} onPress={() => setSeeBeneficiaryForm(true)} style={[styles.btnAddBalance, colors.btnAddBalance]} textStyle={[styles.textStyle, colors.textStyle]} />
            <View style={styles.containerView}>
                <Text style={[styles.title, colors.benefTitle]}>Vos bénéficiaires</Text>
                <FlatList
                    data={beneficiaries}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    renderItem={({ item }) => (
                        <Pressable onPress={() => beginTransfert(item)}>
                            <Item benef={item} />
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                    height={"65%"}
                />
            </View>
        </View>
        {Modale(seeBeneficiaryForm, setSeeBeneficiaryForm, AddBeneficiaryForm)}
        {Modale(ModaleVirement, setModaleVirement, makeTransfertModale)}
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    )
}