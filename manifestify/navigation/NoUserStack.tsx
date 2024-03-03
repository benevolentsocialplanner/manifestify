import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationRoutes from '../constants/navigationRoutes';
import LoginScreen from '../screens/LoginScreen';

import RegisterScreen from '../screens/RegisterScreen';
import InitialScreen from '../screens/InitialScreen';
import EmailScreen from '../screens/email/EmailScreen';
import OTPScreen from '../screens/email/OTPScreen';

const Stack = createNativeStackNavigator();

const NoUserStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.initialScreen}
          component={InitialScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.loginScreen}
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.registerScreen}
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.emailScreen}
          component={EmailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.otpscreen}
          component={OTPScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NoUserStack;
