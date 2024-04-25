import React from 'react';
import axios from 'axios';

const ip_address = 'https://api.artred02.fr';
// const ip_address = 'http://192.168.96.70:8000';

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
    console.log(account);
    const url = `${ip_address}/api/bank_accounts`;
    axios({
        method: 'post',
        url: url,
        data: {
            "userId": account.userId,
            "name": account.name,
            "balance": account.balance,
            "current": true
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
            Accept: 'application/json',
            'Content-Type': 'application/merge-patch+json'
        },
    };
    const url = `${ip_address}/api/bank_accounts/${account.id}`;

    axios.patch(url, {
        "userId": account.userId,
        "name": account.name,
        "balance": account.balance
    }, headers).then(() => {
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
    const url = `${ip_address}/api/users`;
    axios({
        method: 'post',
        url: url,
        data: {
            "userId": userId,
            "tokenNotification": tokenNotification
        },
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
    const url = `${ip_address}/api/users/all`;
    axios.get(url, headers)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
}

const deleteByUserId = async ({ userId }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/users/delete/${userId}`;
    axios({
        method: 'get',
        url: url,
        headers: headers
    }).then(() => {
        console.log('User deleted');
    }).catch((error) => {
        console.log(error);
    });
}

const Transfert = async ({ fromAccountId, toAccountId, amount, navigation }) => {
    const headers = {
        headers: {
            Accept: 'application/json'
        },
    };
    const url = `${ip_address}/api/transferts/${fromAccountId}/${toAccountId}/${amount}`;
    axios({
        method: 'get',
        url: url,
        headers: headers
    }).then(() => {
        navigation.navigate('Home');
    }).catch((error) => {
        console.log(error);
    });
}

export { GetAccountsList, AddAccount, UpdateAccount, DeleteAccount, SetTokenNotification, GetAllUsers, Transfert, deleteByUserId };