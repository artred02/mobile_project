
import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { useFonts, Knewave_400Regular } from '@expo-google-fonts/knewave';
import * as SplashScreen from 'expo-splash-screen';

import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    knewave: Knewave_400Regular,
  });
  
  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  const [user, setUser] = useState(null)

  return (
    <Navigation user={user} setUser={setUser} layout={onLayoutRootView} />  
  );
}