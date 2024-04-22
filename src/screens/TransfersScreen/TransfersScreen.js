import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, RefreshControl, Pressable } from 'react-native';
import NavBottomBar from '../../../components/NavBottomBar';
import Header from '../../../components/Header';
import { firebase } from '../../firebase/config'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faGear, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

export default function TransfersScreen(props) {
    const [userList, setUserList] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const getUsers = async () => {
        let users = [];
        // getting the list of users by firebase query
        const q = firebase.firestore().collection('users');
        const querySnapshot = await q.get();
        querySnapshot.forEach((doc) => {
            if(doc.id != props.extraData.id) {
                users.push(doc.data());
            }
        });
        setUserList(users);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            getUsers();
        }, 1000);
    }, []);

    useState(async () => {
        getUsers();
    }, []);

    const Item = ({ user }) => (
        <View style={styles.userCard}>
            <Text style={styles.userTitle}>{user.fullName}</Text>
            <Text style={styles.userTitle}>{user.email}</Text>
            <FontAwesomeIcon icon={faArrowRight} style={styles.buttonIcon} size={25}/>
        </View>
    );

    return (
        <>
        <View style={styles.container}>
            <View style={styles.containerView}>
                <Header title={"Transferts"} navigation={props.navigation} setUser={props.setUser} />
                <FlatList
                    data={userList}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    renderItem={({ item, index }) => (
                        // <Swipeable renderRightActions={() => RightActions(item)}>
                        //     <Item account={item} />
                        // </Swipeable>
                        <Pressable onPress={() => console.log("pressed")}>
                            <Item user={item} />
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