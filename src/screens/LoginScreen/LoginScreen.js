import React, { useState, useCallback } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';


export default function LoginScreen({navigation, setUser, layout}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
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