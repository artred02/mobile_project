import React, { useState, useCallback } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import Modale from '../../../components/Modale';
import Button from '../../../components/Button';


export default function LoginScreen({navigation, setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [ModaleVisiblePass, setModaleVisiblePass] = useState(false);
    const [emailReset, setEmailReset] = useState('');

    const Passcontent = (
        <View id='name' style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Votre mail</Text>
                <TextInput
                    style={styles.inputReset}
                    onChangeText={(text) => setEmailReset(text)}
                    autoCapitalize="none"
                />
                <Button title="Envoyer" onPress={() => resetPassword(emailReset)} style={styles.btnAddBalance} textStyle={styles.textbutton} />
            </View>
        </View>
    );
    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
    var auth = firebase.auth();
    function resetPassword(email) {
        auth.sendPasswordResetEmail(email)
          .then(function() {
            console.log("Email de réinitialisation du mot de passe envoyé !");
          })
          .catch(function(error) {
            console.log(error.message);
          });
          alert('Email de réinitialisation du mot de passe envoyé !')
          setModaleVisiblePass(false);
      }
    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            setError("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        user.currentPassword = password;
                        setUser(user)
                        navigation.navigate('Home', {user: user})
                    })
                    .catch(error => {
                        setError(error.message)
                    });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView 
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('./../../../assets/logo.png')}
                />

                <Text style={styles.nameapp} >CoinKeeper</Text>

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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                <View style={styles.footerView}>
                        <Text style={styles.footerText}>Forgot your password ? <Text onPress={() => setModaleVisiblePass(true)} style={styles.footerLink}>Reset Password</Text></Text>
                        {Modale(ModaleVisiblePass, setModaleVisiblePass,Passcontent)}
                    </View>
                <View style={styles.citationView}>
                    {/* <Image style={styles.citation} source={require("./../../../assets/citation.png")}/> */}
                    <Text style={styles.citationText}>
                        "Soyez maître de vos finances en suivant attentivement vos comptes banquaires{"\n"}
                        Chaque euro compte pour bâtir un avenir financier solide"
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}