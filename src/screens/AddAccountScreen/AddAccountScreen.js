import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from "../../firebase/config";
import NavBottomBar from "../../../components/NavBottomBar";
import styles from "./styles";
import Button from "../../../components/Button";

export default function AddAccountScreen(props) {
    const [accountName, setAccountName] = React.useState('')
    const [balance, setBalance] = React.useState('')

    const addAccount = () => {
        const accountRef = firebase.firestore().collection('accounts')
        const userID = props.extraData.id
        const data = {
            AccountName: accountName,
            balance: parseFloat(balance),
            userId: userID
        }
        accountRef.add(data)
        .then(() => {
            props.navigation.navigate('Home')
        })
        .catch((error) => {
            alert(error)
        });
    }

    
    return (
        // formulaire création de compte
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Nouveau Compte</Text>
                </View>
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
            <NavBottomBar navigation={props.navigation} />
        </View>
        
        </>
    )
}