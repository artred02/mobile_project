import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../src/firebase/config';



export default function Header(props) {
    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerTxt}>{props.title}</Text>
            <TouchableOpacity onPress={logout} style={styles.logoutTouchable}>
                <FontAwesomeIcon icon={faRightFromBracket} style={styles.buttonIcon} size={25}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={parametre} style={styles.parametreTouchable}>
                <FontAwesomeIcon icon={faGear} style={styles.buttonIcon} size={25}/>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    header:{
        justifyContent:'flex-start',
        marginTop:60,
        marginBottom:20,
        height:50,
        display:'flex'
    },
    headerTxt:{
        color:'#fff',
        fontSize:30,
        margin:10,
        marginLeft:20,
        fontFamily: 'knewave',
        position:'absolute'
    },
    logoutTouchable: {
        marginLeft:'auto',
        marginTop:10,
    },
    parametreTouchable:{
        position:'absolute',
        right:0,
        marginRight: 40,
        margin:10,
    },
    buttonIcon:{
        color:'#2ecc71',
        margin:15,
    },
});