import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { query } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

export default function HomeScreen(props) {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const objectsRef = firebase.firestore().collection('objects');
        const q = query(objectsRef);
        q.onSnapshot((snapshot) => {
            const objects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setObjects(objects);
        });
    }, []);

    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={logout} 
                        style={styles.logoutTouchable}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} style={styles.buttonIcon} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={parametre} style={styles.parametreTouchable}>
                        <FontAwesomeIcon icon={faGear} style={styles.buttonIcon} size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>Bonjour {props.extraData.fullName} !</Text>
                </View>
                {/* <Text>Home Screen</Text>
                <Text>Nom : {props.extraData.fullName}</Text>
                <Text>Email : {props.extraData.email}</Text>

                <Text>Objects:</Text>
                {objects.map((object) => (
                    <View key={object.id}>
                        <Text>{object.name}</Text>
                        <Text>{object.value}</Text>
                    </View>
                ))} */}
                
            </KeyboardAwareScrollView>
        </View>
    )
}