import React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/Home';

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
                headerTintColor: white,
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen options={{headerTintColor: green}} name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack