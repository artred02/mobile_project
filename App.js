import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation';
import { useFonts, Knewave_400Regular } from '@expo-google-fonts/knewave';
import { EagleLake_400Regular } from '@expo-google-fonts/eagle-lake';


export default function App() {
  const [user, setUser] = useState(null)

  let [fontsLoaded] = useFonts({
    knewave: Knewave_400Regular,
    eagleLake: EagleLake_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigation user={user} setUser={setUser} />
    </NavigationContainer>
  );
}