import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, FlatList, Pressable, RefreshControl } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GetAccountsList, SetTokenNotification } from '../../../components/Api'
import { styles, Colors } from './styles';
import Header from '../../../components/Header';
import NavBottomBar from '../../../components/NavBottomBar'

import * as SecureStore from 'expo-secure-store';

const HomeScreen = (props) => {
    const [accounts, setAccounts] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const colors = Colors(props.theme);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        reloadList();
        }, 1000);
    }, []);

    const reloadList = async () => {
        GetAccountsList({ userId: props.extraData.id, setAccounts: setAccounts });
    };

    useEffect(() => {
        reloadList();
        // Wait 2 s
        setTimeout(() => {
            SetTokenNotification({ userId: props.extraData.id, tokenNotification: props.tokenNotification })
        }, 2000);
    }, []);
    
    const accountRedirect = (account) => {
        props.navigation.navigate('Account', {account: account})
    }

    const Item = ({ account }) => (
        <View style={styles.accountCard}>
            <Text style={styles.title}>{account.name}</Text>
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
        <View style={[styles.container, colors.container]}>
            <View style={styles.containerView}>
                <Header title={"Accounts"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
                {/* <Button title={"Accounts"} onPress={() => reloadList() } /> */}
                <FlatList
                    data={accounts}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
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
        <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </>
    )
}

export default HomeScreen;