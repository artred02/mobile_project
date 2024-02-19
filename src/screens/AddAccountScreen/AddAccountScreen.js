import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from "../../firebase/config";
import NavBottomBar from "../../../components/NavBottomBar";
import styles from "./styles";

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
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Confidentialite</Text>
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => addAccount()}
                >
                    <Text style={styles.buttonTitle}>Créer</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
            <View style={styles.navbar}>
                <NavBottomBar navigation={props.navigation} />
            </View>
        </View>
        
        </>
    )
}