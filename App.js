import React, { useState, useEffect } from 'react';
// React Navigation Stack
import RootStack from './navigators/RootStack';
// Splash Screen
// import * as SplashScreen from 'expo-splash-screen';
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// User Context
import { UserContext } from './components/UserContext';
// import Splash from './components/Splash';

export default function App({ navigation }) {
  // const [appReady, setAppReady] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkUserData = async () => {
    console.log('Checking for data')
    await AsyncStorage.getItem('userSessionData')
      .then((userSessionData) => {
        if (userSessionData !== null) {
          setUserData(JSON.parse(userSessionData))
        } else {
          setUserData(null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    // .finally(() => {
    //   SplashScreen.hideAsync()
    //   .then((result) => {
    //     console.log(`Splash Screen Hidden: ${result}`)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // })
  }
  // checkUserData();

  // useEffect(() => {
  // const prepare = async () => {
  //   await SplashScreen.preventAutoHideAsync()
  //   .then(() => {
  // checkUserData();
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  // prepare();
  // }, []);

  // if (!appReady) {
  //   return <Splash />;
  // }

  return (
    <UserContext.Provider value={({ userData, setUserData })}>
      <RootStack />
    </UserContext.Provider>
  );
}