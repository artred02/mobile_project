import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AddAccount } from "../../../components/Api";
import NavBottomBar from "../../../components/NavBottomBar";
import Header from "../../../components/Header";
import styles from "./styles";
import Button from "../../../components/Button";

export default function AddAccountScreen(props) {
    const [accountName, setAccountName] = React.useState('')
    const [balance, setBalance] = React.useState('')

    const addAccount = () => {
        AddAccount({ account: {name: accountName, balance: parseFloat(balance), userId: props.extraData.id }, navigation: props.navigation });
    }
    
    return (
        // formulaire création de compte
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
            >
                <Header title={"Nouveau Compte"} navigation={props.navigation} setUser={props.setUser} />
                <TextInput
                    style={styles.input}
                    placeholder='Nom du compte'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAccountName(text)}
                    value={accountName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Solde'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setBalance(text)}
                    value={balance}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button style={styles.buttonAdd} title={"Créer"} onPress={() => addAccount()} />
            </KeyboardAwareScrollView>
        </View>
        <NavBottomBar navigation={props.navigation} />
        
        </>
    )
}