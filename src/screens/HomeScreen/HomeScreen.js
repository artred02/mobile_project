import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, FlatList, Pressable, ScrollView } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../../firebase/config'
import styles from './styles';
import NavBottomBar from '../../../components/NavBottomBar'

export default function HomeScreen(props) {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const objectsRef = firebase.firestore().collection('accounts');
        const q = objectsRef.where('userId', '==', props.extraData.id);
        q.onSnapshot((snapshot) => {
            const objects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAccounts(objects);
        });
    }, []);
    
    const accountRedirect = (account) => {
        props.navigation.navigate('Account', {account: account})
    }

    const logout = () => {
        firebase.auth().signOut()
        props.setUser(null)
    }

    const parametre = () => {
        props.navigation.navigate('Settings')
    }

    const Item = ({ account }) => (
        <View style={styles.accountCard}>
            <Text style={styles.title}>{account.AccountName}</Text>
            <Text style={styles.title}>{account.balance} €</Text>
            <FontAwesomeIcon icon={faArrowRight} style={styles.buttonIcon} size={25}/>
        </View>
    );

    const RightActions = (account) => {
        return (
            <TouchableOpacity style={styles.rightAction}>
                <Pressable onPress={() => accountRedirect(account)}>
                    <Text style={styles.actionText}>Redirect</Text>
                </Pressable>
            </TouchableOpacity>
        );
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.containerView}>
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
            <Text style={styles.accountsTitle} >Accounts:</Text>
            {/* {accounts.map((account) => (
                <TouchableOpacity key={account.id} onPress={() => props.navigation.navigate('Account', {account: account})}>
                <View style={styles.accountCard} >
                    <Text>{account.AccountName}</Text>
                    <Text>{account.balance} €</Text>
                    <FontAwesomeIcon icon={faArrowRight} style={styles.buttonIcon} size={25}/>
                </View>
                </TouchableOpacity>
            ))} */}
                <FlatList
                    data={accounts}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item, index }) => (
                        // <Swipeable renderRightActions={() => RightActions(item)}>
                        //     <Item account={item} />
                        // </Swipeable>
                        <Pressable onPress={() => accountRedirect(item)}>
                            <Item account={item} />
                        </Pressable>
                    )}
                    showsVerticalScrollIndicator={true}
                    scrollEnabled={true}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                />
        </View>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}