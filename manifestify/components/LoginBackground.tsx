import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

const LoginBackground = ({children}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bakcground.png')}
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default LoginBackground;
