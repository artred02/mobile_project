import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function HomeScreen(props) {

    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
            >
                <Text>Home Screen</Text>
                <Text>Nom : {props.extraData.fullName}</Text>
                <Text>Email : {props.extraData.email}</Text>
                
                <TouchableOpacity 
                    onPress={logout} 
                    style={styles.button}
                >
                    <Text style={styles.buttonTitle} >Logout</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}