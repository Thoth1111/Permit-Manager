import React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Home from '../screens/Home';
import Licenses from '../screens/Licenses';
import Payments from '../screens/Payments';
import Account from '../screens/Account';

import { Colors } from '../components/styles';

const { white, green } = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent'
                },
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: green,
            }}
            initialRouteName='Splash'
        >   
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen options={{headerTintColor: white}} name="Login" component={Login} />
            <Stack.Screen options={{headerTintColor: white}} name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Licenses" component={Licenses} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack