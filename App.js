
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
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
            {props => <HomeScreen {...props} extraData={user} setUser={setUser} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{ 
                headerStyle: {
                  backgroundColor: '#34495e',
                },
            }}>
              {props => <LoginScreen {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="Registration"
              options={{ 
                headerStyle: {
                  backgroundColor: '#34495e',
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