import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationRoutes from '../constants/navigationRoutes';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import InitialScreen from '../screens/InitialScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

const Stack = createNativeStackNavigator();

const NoUserStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.InitialScreen}
          component={InitialScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.loginScreen}
          component={DiscoverScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.registerScreen}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NoUserStack;
