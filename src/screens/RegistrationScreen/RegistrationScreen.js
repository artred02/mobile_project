import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function RegistrationScreen({navigation, setUser}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passlist, setPasslist] = useState([])
    const [point1, setPoint1] = useState("")
    const [point2, setPoint2] = useState("")
    const [point3, setPoint3] = useState("")
    const [point4, setPoint4] = useState("")
    const [point5, setPoint5] = useState("")
    const [point6, setPoint6] = useState("")

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const randomNum = () => {
        let numbers = Array.from({length: 10}, (_, i) => i);
        let result = '';
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const digit = numbers.splice(randomIndex, 1)[0];
            result += digit;
        }
        return result;

    }
    const passwordmaking = () => {
        if (passlist.length === 6) {
            let password = passlist
            setPassword(password)
            console.log('Mot de passe ok : ', password)
        }
    }

    const onRegisterPress = () => {
        
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        setUser(data)
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    const [randomList_, setRandomlist] = useState('')


    useEffect(() => {
        if (passlist.length === 1) {
            setPoint1("•")
        }
        if (passlist.length === 2) {
            setPoint2("•")
        }
        if (passlist.length === 3) {
            setPoint3("•")
        }
        if (passlist.length === 4) {
            setPoint4("•")
        }
        if (passlist.length === 5) {
            setPoint5("•")
        }
        if (passlist.length === 6) {
            setPoint6("•")
        }
        if( passlist.length > 6){
            Alert.alert('Veuillez saisir 6 chiffres maximum')}
        passwordmaking()

    },[passlist])
    
    useEffect(() => {
        setRandomlist(randomNum())
    }, [])

    function passwordFunc(new_char) {
        setPasslist(passlist + '' + new_char.toString())
    }
    
    
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <Text style={styles.nameapp}>CoinKeeper</Text>

                <TextInput
                    style={styles.input}
                    maxLength={15}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    maxLength={50}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.passwordTitle}>Créer votre mot de passe</Text>
                <View style={styles.viewPointPassword}>
                    <Text style={styles.pointPassword}>{point1}</Text>                    
                    <Text style={styles.pointPassword}>{point2}</Text>
                    <Text style={styles.pointPassword}>{point3}</Text>
                    <Text style={styles.pointPassword}>{point4}</Text>
                    <Text style={styles.pointPassword}>{point5}</Text>
                    <Text style={styles.pointPassword}>{point6}</Text>
                <View style={styles.resetButton}>
                    <TouchableOpacity style={styles.buttonReset} onPress={()=>{setPasslist(''); setPoint1(''); setPoint2(''); setPoint3(''); setPoint4(''); setPoint5(''); setPoint6('')}}>
                        <FontAwesomeIcon icon={faDeleteLeft} style={styles.buttonIcon} size={25} color='white'/>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.password}>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[0])}}>
                        <Text style={styles.buttonNumber}>{randomList_[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[1])}}>
                        <Text style={styles.buttonNumber}>{randomList_[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[2])}}>
                        <Text style={styles.buttonNumber}>{randomList_[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[3])}}>
                        <Text style={styles.buttonNumber}>{randomList_[3]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[4])}}>
                        <Text style={styles.buttonNumber}>{randomList_[4]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.password}> 
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[5])}}>
                        <Text style={styles.buttonNumber}>{randomList_[5]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[6])}}>
                        <Text style={styles.buttonNumber}>{randomList_[6]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[7])}}>
                        <Text style={styles.buttonNumber}>{randomList_[7]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[8])}}>
                        <Text style={styles.buttonNumber}>{randomList_[8]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNumber} onPress={()=>{passwordFunc(randomList_[9])}}>
                        <Text style={styles.buttonNumber}>{randomList_[9]}</Text>
                    </TouchableOpacity>
                    
                </View>
                {/* <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                /> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}