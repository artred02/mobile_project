import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, SettingsScreen, ChatScreen, ConfidentialiteScreen } from '../screens'


const Stack = createStackNavigator();


export default function Navigation ({user, setUser, layout}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <>
          <Stack.Screen
          name="Home"
          options={{ 
            headerStyle: {
              height:0
            },
          }}>
            {props => <HomeScreen {...props} extraData={user} setUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            options={{ 
              headerStyle: {
                height:0
              },
            }}>
            {props => <SettingsScreen {...props} extraData={user} setUser={setUser} />}
          </Stack.Screen>
          <Stack.Screen
            name="Chatbot"
            options={{ 
              headerStyle: {
                height: 0,
              },
          }}>
            {props => <ChatScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Confidentialite"
            options={{ 
              headerStyle: {
                height: 0,
              },
          }}>
            {props => <ConfidentialiteScreen {...props} />}
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
              {props => <LoginScreen {...props} setUser={setUser} layout={layout} />}
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
  )
}