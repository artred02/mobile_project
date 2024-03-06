import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase/config'
import { query } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { faPen } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import NavBottomBar from '../../../components/NavBottomBar';

export default function ConfidentialiteScreen(props) {
    console.log()



    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Confidentialité</Text>
                </View>
                <TouchableOpacity onPress={changePassword("kachow2","kachow")}>
                  <View style={styles.information}>
                      <Text style={styles.title}>Changer mot de passe :</Text>
                      <Text style={styles.bodyPassword}>********</Text>
                      <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15}/>

                  </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={changeEmail("kachow","kachow2")}>
                  <View style={styles.information}>
                      <Text style={styles.title}>Changer email :</Text>
                      <Text style={styles.bodyEmail}>your@mail.com</Text>

                      <FontAwesomeIcon icon={faPen} style={styles.buttonIcon} size={15}/>

                  </View>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}