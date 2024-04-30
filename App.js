import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PermissionsAndroid, useColorScheme } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { useFonts, Knewave_400Regular } from '@expo-google-fonts/knewave';
import { EagleLake_400Regular } from '@expo-google-fonts/eagle-lake';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import { SecureStoreSave, SecureStoreRead, storeData, getData } from './components/SecureStore';

async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token.data;
}

const requestUserPermission = async () => {
  
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
    title: 'Storage Permission',
    message: 'App needs access to your storage',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });

  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
    title: 'Storage Permission',
    message: 'App needs access to your storage',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });
}

const App = () => {
  const [user, setUser] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [theme, setTheme] = useState('light');

  
  const requestTheme = async () => {
    await getData('theme', setTheme);
  }
  

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    requestUserPermission();
    requestTheme();
  }, []);

  let [fontsLoaded] = useFonts({
    knewave: Knewave_400Regular,
    eagleLake: EagleLake_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <Navigation theme={theme} setTheme={setTheme} user={user} setUser={setUser} tokenNotification={expoPushToken} />
      </NavigationContainer>
  );
}

export default App;

// import { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
// import Constants from 'expo-constants';





// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }



// export default function App() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
//       <Text>Your expo push token: {expoPushToken}</Text>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Title: {notification && notification.request.content.title} </Text>
//         <Text>Body: {notification && notification.request.content.body}</Text>
//         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//       </View>
//     </View>
//   );
// }
