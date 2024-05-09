import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import Header from '../../../components/Header'
import NavBottomBar from '../../../components/NavBottomBar'
import { styles, Colors, pickerSelectStyles } from './styles'
import { FlatList } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select';
import { GetOperations, MakeNewOpe } from '../../../components/Api'
import Button from '../../../components/Button'
import Modale from '../../../components/Modale'

export default function OperationsScreen(props) {
    const colors = Colors(props.theme);
    const [operations, setOperations] = useState([]);
    const [modaleAddOpe, setModaleAddOpe] = useState(false);
    const [opeType, setOpeType] = useState('ope_in');
    const [opeAmount, setOpeAmount] = useState(0);

    useEffect(() => {
        GetOpe(props.route.params.account.id);
    }, []);

    const GetOpe = (accountId) => {
        GetOperations({ accountId: accountId, setOperations: setOperations });
    }

    const ValidateOpe = () => {
        if (!isNaN(opeAmount)) {
            MakeNewOpe({ IdAccountSource: props.route.params.account.id, IdAccountTarget: null, type: opeType, amount: opeAmount }).then(() => {
                // wait 1s
                setTimeout(() => {
                    GetOpe(props.route.params.account.id);
                }, 1000);
            });
            setModaleAddOpe(false);
        }
    }

    const getDate = (date) => {
        let d = new Date(date);
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }

    const getTypeOpe = (type) => {
        switch (type) {
            case 'ope_in':
                return 'Entrée d\'argent';
            case 'ope_out':
                return 'Sortie d\'argent';
            case 'virement':
                return 'Virement';
            default:
                return 'Type inconnu';
        }
    }

    const contentModaleAdd = (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Ajouter une opération :</Text>
                <View style={styles.input_double_view}>
                    <RNPickerSelect
                        onValueChange={(value) => setOpeType(value)}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: 'Entrée d\'Argent', value: 'ope_in' },
                            { label: 'Sortie d\'Argent', value: 'ope_out' }
                        ]}
                        style={pickerSelectStyles}
                    />
                    <TextInput
                        style={[styles.input_double, colors.input]}
                        onChangeText={(text) => setOpeAmount(text)}
                        placeholder='Montant'
                        keyboardType = 'numeric'
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <Button title="Ajouter" onPress={() => {ValidateOpe()}} style={styles.btnAddBalance} textStyle={styles.textStyle} />
            </View>
        </View>
    );

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <View style={styles.containerView}>
                <Header title={"Operations"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
                <Button title={"Ajouter une opération"} onPress={() => setModaleAddOpe(true)} style={[styles.btnAddOpe, colors.btnAddOpe]} textStyle={styles.textStyle} />
                <FlatList
                    data={operations}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item }) => (
                        <View style={[styles.accountCard, colors.accountCard]}>
                            <Text style={[styles.title, colors.title]}>{getTypeOpe(item.type)}</Text>
                            <Text style={[styles.title, colors.title]}>{getDate(item.date)}</Text>
                            <Text style={[styles.title, colors.title]}>{item.amount} €</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                    height={"60%"}
                />
            </View>
        </View>
        {Modale(modaleAddOpe, setModaleAddOpe, contentModaleAdd)}
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    )
}