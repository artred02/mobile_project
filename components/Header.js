import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../src/firebase/config';



export default function Header(props) {
    const colors = Colors(props.theme);
    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    return (
        <View style={[styles.header, colors.header]}>
            <Text style={[styles.headerTxt, colors.headerTxt]}>{props.title}</Text>
            <TouchableOpacity onPress={logout} style={[styles.logoutTouchable, colors.logoutTouchable]}>
                <FontAwesomeIcon icon={faRightFromBracket} style={[styles.buttonIcon, colors.buttonIcon]} size={25}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={parametre} style={styles.parametreTouchable}>
                <FontAwesomeIcon icon={faGear} style={[styles.buttonIcon, colors.buttonIcon]} size={25}/>
            </TouchableOpacity>
        </View>
    );
}

const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
  }

const styles = StyleSheet.create({
    dark: {
        header: {
            backgroundColor: "#34495e",
        },
        headerTxt: {
            color: 'white',
        },
        buttonIcon:{
            color:'#2ecc71',
        },
    },
    light: {
        header: {
            backgroundColor: "#dcdde1",
        },
        headerTxt: {
            color: 'black',
        },
        buttonIcon:{
            color:'black',
        },
    },
    header:{
        justifyContent:'flex-start',
        marginTop:60,
        marginBottom:20,
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    headerTxt:{
        fontSize:25,
        margin:10,
        marginLeft:20,
        position:'absolute',
        fontWeight:"bold",
    },
    logoutTouchable: {
        marginLeft:'auto',
    },
    parametreTouchable:{
        position:'absolute',
        right:0,
        marginRight: 40,
    },
    buttonIcon:{
        color:'#2ecc71',
        margin:15,
    },
});