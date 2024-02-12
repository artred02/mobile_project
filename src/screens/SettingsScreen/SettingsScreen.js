import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { collection, query, where } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import NavBottomBar from '../../../components/NavBottomBar'


export default function SettingsScreen(props) {
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
        alert("Parametre")
    }

    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                
                <Text style={styles.headerTxt}>Paramètres</Text>
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
        <View>
            <NavBottomBar/>
        </View>
        </>
        
    )
}