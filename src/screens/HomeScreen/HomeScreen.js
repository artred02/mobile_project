import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, FlatList, Pressable, ScrollView } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { firebase } from '../../firebase/config'
import styles from './styles';
import Header from '../../../components/Header';
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
                <Header title={"Accounts"} navigation={props.navigation} setUser={props.setUser} />
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
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                    height={"65%"}
                />
            </View>
        </View>
        <NavBottomBar navigation={props.navigation} />
        </>
    )
}