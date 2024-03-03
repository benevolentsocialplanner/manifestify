import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationRoutes from '../constants/navigationRoutes';
import BottomTabNavigation from './BottomTabNavigation';
import { ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();

const LoggedInStack = ({navigation}) => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={navigationRoutes.BottomTab}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoggedInStack