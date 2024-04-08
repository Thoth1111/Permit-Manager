import React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Token Context
import { UserContext } from '../components/UserContext';

// Screens
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Home from '../screens/Home';
import Licenses from '../screens/Licenses';
import MyLicense from '../screens/MyLicense';
import Payments from '../screens/Payments';
import Account from '../screens/Account';

import { Colors } from '../components/styles';

const { white, green } = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <UserContext.Consumer>
            {({ userData }) => (
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
                        initialRouteName='Landing'
                    >
                        {userData ? (
                            <>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen name="Licenses" component={Licenses} />
                                <Stack.Screen name="MyLicense" component={MyLicense} />
                                <Stack.Screen name="Payments" component={Payments} />
                                <Stack.Screen name="Account" component={Account} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="Landing" component={Landing} />
                                <Stack.Screen options={{ headerTintColor: white }} name="Login" component={Login} />
                                <Stack.Screen options={{ headerTintColor: white }} name="SignUp" component={SignUp} />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </UserContext.Consumer>

    )
}

export default RootStack