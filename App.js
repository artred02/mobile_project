
import 'react-native-gesture-handler';
import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { useFonts } from 'expo-font';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'ProtestRiot': require('./assets/fonts/ProtestRiot.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen
            name="Home"
            options={{ 
              headerStyle: {
                backgroundColor: '#34495e',
              },
            }}>
            {props => <HomeScreen {...props} extraData={user} setUser={setUser} isLoading={isLoading} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{ 
                headerStyle: {
                  height: 0,
                },
            }}>
              {props => <LoginScreen {...props} setUser={setUser} layout={onLayoutRootView} />}
            </Stack.Screen>
            <Stack.Screen
              name="Registration"
              options={{ 
                headerStyle: {
                  height: 0,
                },
            }}>
              {props => <RegistrationScreen {...props} setUser={setUser}/>}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  base: {
    backgroundColor: 'black',
  }
})