
import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation/Navigation';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'ProtestRiot': require('./assets/fonts/ProtestRiot.ttf')
  });

  const [user, setUser] = useState(null)

  return (
    <Navigation user={user} setUser={setUser} />
  );
}


const styles = StyleSheet.create({
  base: {
    backgroundColor: 'black',
  }
})