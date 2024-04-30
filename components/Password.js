import {Platform, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Password({setPassword}) {
    const [passlist, setPasslist] = useState([])
    const [point1, setPoint1] = useState("")
    const [point2, setPoint2] = useState("")
    const [point3, setPoint3] = useState("")
    const [point4, setPoint4] = useState("")
    const [point5, setPoint5] = useState("")
    const [point6, setPoint6] = useState("")

    const [randomList_, setRandomlist] = useState('')

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
    return(
    <>
    <Text style={styles.passwordTitle}>Entrer votre mot de passe</Text>
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
            </>
    )

}

const styles = StyleSheet.create({

    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,        
    },
    buttonNumber: {
        backgroundColor: '#2c3e50',
        height: 60,
        width: 60,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        lineHeight: 60,
        overflow: 'hidden',
        borderRadius: 15,
    },
    pointPassword: {
        backgroundColor: '#2c3e50',
        height: (Platform.OS === 'ios') ? 50 : 40,
        width: (Platform.OS === 'ios') ? 50 : 40,
        color: 'white',
        textAlign: 'center',
        lineHeight: 55,
        fontSize: 55,
        borderRadius: 25,
        overflow: 'hidden',
    },
    viewPointPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    passwordTitle: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5,
    },
    buttonReset: {
        backgroundColor: '#e74c3c',
        height: (Platform.OS === 'ios') ? 50 : 40,
        width: (Platform.OS === 'ios') ? 50 : 40,
        marginLeft: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: 'center',
        
    },    
})