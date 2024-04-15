import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavBottomBar from '../../../components/NavBottomBar';
import { GetAllUsers } from '../../../components/Api';
import Header from '../../../components/Header';
import styles from './styles';

export default function TransfersScreen(props) {

    useState(() => {
        GetAllUsers();
    }, []);

    return (
        <>
        <View style={styles.container}>
            <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} />
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text style={styles.headerTxt}>Transferts</Text>
                </View>
            </ScrollView>
        </View>
        <NavBottomBar navigation={props.navigation} />
        </>
    )
}