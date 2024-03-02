import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

const LoginBackground = ({ children, ...inputProps }) => {
  const backgroundImageSource = inputProps.bg
    ? { uri: `../assets/images/${inputProps.bg}` }
    : require('../assets/images/loginBg.png');

  return (
    <ImageBackground
      source={backgroundImageSource}
      style={{ flex: 1 }}>
      {children}
    </ImageBackground>
  );
};

export default LoginBackground;
