import React from 'react';
import axios from 'axios';

const ip_address = 'https://artred02.fr';

const GetAccountsList = async ({ userId, setAccounts }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/bank_accounts/user/${userId}`;
    axios.get(url, headers)
        .then((response) => {
            setAccounts(response.data);
        }).catch((error) => {
            console.log(error);
        });
}

const AddAccount = async ({ account, navigation }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/bank_accounts`;
    axios({
        method: 'post',
        url: url,
        data: {
            "userId": account.userId,
            "name": account.name,
            "balance": account.balance
        },
        headers: headers
    }).then(() => {
        navigation.navigate('Home');
    }).catch((error) => {
        console.log(error);
    });
}

const UpdateAccount = async ({ account, setModalVisible, navigation }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/bank_accounts/${account.id}`;
    axios({
        method: 'put',
        url: url,
        data: {
            "userId": account.userId,
            "name": account.name,
            "balance": account.balance
        },
        headers: headers
    }).then(() => {
        setModalVisible(false);
        navigation.navigate('Account', { account: account });
    }).catch((error) => {
        console.log(error);
    });
}

const DeleteAccount = async ({ accountId, navigation }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/bank_accounts/${accountId}`;
    axios({
        method: 'delete',
        url: url,
        headers: headers
    }).then(() => {
        navigation.navigate('Home');
    }).catch((error) => {
        console.log(error);
    });
}

const SetTokenNotification = async ({ userId, tokenNotification }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/users/${userId}/${tokenNotification}`;
    axios({
        method: 'get',
        url: url,
        headers: headers
    }).then(() => {
        console.log('Token saved');
    }).catch((error) => {
        console.log(error);
    });
}

const GetAllUsers = async () => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/users`;
    axios.get(url, headers)
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
}

export { GetAccountsList, AddAccount, UpdateAccount, DeleteAccount, SetTokenNotification };