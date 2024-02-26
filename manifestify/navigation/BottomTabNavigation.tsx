import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ViewStyle, StyleSheet, Dimensions, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    marginBottom: 75,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: '60%',
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 100,
    height: SCREEN_HEIGHT * 0.08, // Set height to 10% of screen height
  } as ViewStyle
};

const BottomTabNavigation = ({ navigation }) => {

  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.imageDiscover}
                  source={require('../assets/images/home.png')}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="dadad"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.imageHome}
                  source={require('../assets/images/bottomtab2.png')}
                />
              );
            }
          }}
        /><Tab.Screen
        name="daddad"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={styles.imageProfile}
                source={require('../assets/images/profile.png')}
              />
            );
          }
        }}
      />
      </Tab.Navigator>
    </>
  );
}

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
  }
});

export default BottomTabNavigation;
