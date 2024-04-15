import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, SettingsScreen, ChatScreen, ConfidentialiteScreen, AccountScreen, AddAccountScreen, TransfersScreen } from '../screens'


const Stack = createStackNavigator();


export default function Navigation ({user, setUser, tokenNotification}) {
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
          {props => <HomeScreen {...props} extraData={user} setUser={setUser} tokenNotification={tokenNotification} />}
        </Stack.Screen>
        <Stack.Screen
          name="Settings"
          options={{ 
            headerStyle: {
              height:0
            },
            headerLeft: null,
          }}>
          {props => <SettingsScreen {...props} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Chatbot"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <ChatScreen {...props} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Confidentialite"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <ConfidentialiteScreen {...props} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Account"
          options={{
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <AccountScreen {...props} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddAccount"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <AddAccountScreen {...props} extraData={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen
          name="Transfers"
          options={{ 
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
        }}>
          {props => <TransfersScreen {...props} extraData={user} setUser={setUser} />}
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
            {props => <LoginScreen {...props} setUser={setUser} />}
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
  )
}