import React, { useState,useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';
import { styles, Colors } from './styles';
import Modale from '../../../components/Modale';
import Button from '../../../components/Button';
import Password from '../../../components/Password';
import { getData, storeData } from '../../../components/SecureStore';
export default function LoginScreen({ navigation, setUser, theme }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [ModaleVisiblePass, setModaleVisiblePass] = useState(false);
    const [emailReset, setEmailReset] = useState('');
    const colors = Colors(theme);

    const Passcontent = (
        <View id='name' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Votre mail</Text>
                <TextInput
                    style={styles.inputReset}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmailReset(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button title="Envoyer" onPress={() => resetPassword(emailReset)} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    };

    useEffect(()=>{
        getData('userMail', setEmail);
        if (password.length === 6 && email) {
            let password = password
            onLoginPress()
        }
    },[password])

    const resetPassword = (email) => {
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('Email de réinitialisation du mot de passe envoyé !');
                setModaleVisiblePass(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const onLoginPress = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            const uid = response.user.uid;
            const usersRef = firebase.firestore().collection('users');
            const firestoreDocument = await usersRef.doc(uid).get();
            if (!firestoreDocument.exists) {
                setError("User does not exist anymore.");
                return;
            }
            const user = firestoreDocument.data();
            user.currentPassword = password;
            setUser(user);
            storeData('userMail', user.email);
            navigation.navigate('Home', { user: user });
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <View style={[styles.container,colors.container]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('./../../../assets/logo.png')}
                />

                <Text style={[styles.nameapp,colors.nameapp]} >CoinKeeper</Text>

                {error ? <Text style={styles.error} >{error}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Password setPassword={setPassword} theme={theme}/>
                <View style={styles.footerView}>
                    <Text style={[styles.footerText,colors.footerText]}>Don't have an account ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                <View style={styles.footerView}>
                    <Text style={[styles.footerText,colors.footerText]}>Forgot your password ? <Text onPress={() => setModaleVisiblePass(true)} style={styles.footerLink}>Reset Password</Text></Text>
                    {Modale(ModaleVisiblePass, setModaleVisiblePass,Passcontent)}
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
