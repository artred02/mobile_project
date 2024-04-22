import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View,Button,Modal, Pressable } from 'react-native'
import { firebase } from '../../firebase/config'
import { collection, query, where } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faUser, faGear } from '@fortawesome/free-solid-svg-icons/';
import NavBottomBar from '../../../components/NavBottomBar';

export default function SettingsScreen(props) {
    const [objects, setObjects] = useState([]);

    const confidentialite = () => {
        props.navigation.navigate('Confidentialite')
    }



    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Paramètres</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Mes Informations</Text>
                    <TouchableOpacity onPress={confidentialite}>
                        <View style={styles.information}>
                            <FontAwesomeIcon icon={faGear} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Confidentialité</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}