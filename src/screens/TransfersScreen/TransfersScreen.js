import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import styles from './styles';

export default function TransfersScreen(props) {
    const [iban, setIban] = useState('');

    const addAccountOnTransfers = (iban) => {
        console.log(iban);
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.containerView}>
                <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} />
                <TextInput
                    style={styles.input}
                    placeholder='Nom du compte'
                    placeholderTextColor="FR76"
                    onChangeText={(text) => setIban(text)}
                    value={iban}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button title="Ajouter" onPress={() => addAccountOnTransfers(iban)} style={styles.btnAddBalance} textStyle={styles.textStyle} />
            </View>
        </View>
        <NavBottomBar navigation={props.navigation} />
        </>
    )
}