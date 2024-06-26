import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SettingsScreen, ChatScreen, ConfidentialiteScreen, AccountScreen, AddAccountScreen, TransfersScreen, OperationsScreen, BeneficiariesScreen } from '../screens';
import RibScreen from '../screens/RibScreen/RibScreen';
import { LoginScreen, RegistrationScreen } from '../screens';

const Stack = createStackNavigator();

export default function Navigation ({theme, setTheme, user, setUser, tokenNotification}) {
  return (
    <Stack.Navigator>
      { user ? (
        <>
        <Stack.Screen
        name="Home"
        options={{ 
          headerStyle: {
            height:0
          },
          headerLeft: null,
        }}>
          {props => <HomeScreen {...props} theme={theme} extraData={user} setUser={setUser} tokenNotification={tokenNotification} />}
        </Stack.Screen>
        <Stack.Screen
          name="Settings"
          options={{ 
            headerStyle: {
              height:0
            },
            headerLeft: null,
          }}>
          {props => <SettingsScreen {...props} theme={theme} setTheme={setTheme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Chatbot"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <ChatScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Confidentialite"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <ConfidentialiteScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Beneficiaries"
          options={{
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <BeneficiariesScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Account"
          options={{
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <AccountScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddAccount"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <AddAccountScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Transfers"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <TransfersScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
            name="Rib"
            options={{
                headerStyle: {
                    height: 0
                },
                headerLeft: null,
            }}>
            {props => <RibScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
            name="Operations"
            options={{
                headerStyle: {
                    height: 0
                },
                headerLeft: null,
            }}>
            {props => <OperationsScreen {...props} theme={theme} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            options={{ 
              headerStyle: {
                height: 0,
              },
          }}>
            {props => <LoginScreen {...props} theme={theme} setUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen
            name="Registration"
            options={{ 
              headerStyle: {
                height: 0,
              },
          }}>
            {props => <RegistrationScreen {...props} theme={theme} setUser={setUser}/>}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  )
}