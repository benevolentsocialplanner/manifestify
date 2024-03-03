import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ViewStyle, StyleSheet, Dimensions, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../constants/theme';
import DiscoverScreen from '../screens/DiscoverScreen';
import navigationRoutes from '../constants/navigationRoutes';
import {ImageBackground} from 'react-native';

const Tab = createBottomTabNavigator();
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    marginBottom: 75,
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    left: '20%',
    width: '60%',
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 25,
    position: 'absolute',
    zIndex: 100,
    height: SCREEN_HEIGHT * 0.08, // Set height to 10% of screen height
  } as ViewStyle,
};

const BottomTabNavigation = ({navigation}) => {
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="home"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image  
                  style={styles.imageDiscover}
                  source={focused ? require('../assets/images/activeDiscover.png') : require('../assets/images/home.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationRoutes.homeScreen}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={styles.imageHome}
                  source={focused ? require('../assets/images/bottomtab2.png') : require('../assets/images/activeBottomtab2.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationRoutes.profileScreen}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={styles.imageProfile}
                  source={focused ? require('../assets/images/activeProfile.png') : require('../assets/images/profile.png')}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    justifyContent: 'center',
  },
  imageDiscover: {
    width: 30,
    height: 30,
  },
  imageHome: {
    width: 30,
    height: 30,
  },
  imageProfile: {
    width: 24.3,
    height: 30,
  },
});

export default BottomTabNavigation;
