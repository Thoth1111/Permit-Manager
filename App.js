import React, { useState, useEffect } from 'react';
import RootStack from './navigators/RootStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import store from './redux/store'
import { UserContext } from './components/UserContext';
import Splash from './components/Splash';

export default function App({ navigation }) {
  const [appReady, setAppReady] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkUserData = async () => {
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
      .finally(() => {
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
    <Provider store={store}>
      <UserContext.Provider value={({ userData, setUserData })}>
        <RootStack />
      </UserContext.Provider>
    </Provider>
  );
}