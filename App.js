import React, { useState, useEffect } from 'react';
// React Navigation Stack
import RootStack from './navigators/RootStack';
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// User Context
import { UserContext } from './components/UserContext';
// Splash Screen
import Splash from './components/Splash';

export default function App({ navigation }) {
  const [appReady, setAppReady] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkUserData = async () => {
    console.log('Checking user data')
    await AsyncStorage.getItem('userSessionData')
      .then((userSessionData) => {
        if (userSessionData !== null) {
          console.log('User data found')
          setUserData(JSON.parse(userSessionData))
        } else {
          console.log('No user data found')
          setUserData(null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('final callback executed')
        setAppReady(true)
      })
  }

  useEffect(() => {
    checkUserData();
  }, []);

  if (!appReady) {
    return <Splash />;
  }

  return (
    <UserContext.Provider value={({ userData, setUserData })}>
      <RootStack />
    </UserContext.Provider>
  );
}