import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecureStoreSave = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
};

const SecureStoreRead = async (key, setValue) => {
    const result = await SecureStore.getItemAsync(key).then((result) => {
        return result;
    });
};

const storeData = async (key, value, setValue) => {
    try {
      await AsyncStorage.setItem(key, value).then(() => {
        if(setValue !== undefined)
          setValue(value);
      });
    } catch (e) {
        console.log(e);
    }
};

const getData = async (key, setValue) => {  
  
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setValue(value);
      }
    } catch (e) {
      // error reading value
    }
};

export { SecureStoreSave, SecureStoreRead, storeData, getData };