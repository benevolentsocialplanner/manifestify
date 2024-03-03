import React from 'react';
import Header from '../components/Header';
import { ImageBackground, View } from 'react-native';

const DiscoverScreen = () => {
  return (
      <ImageBackground source={require("../assets/images/discoverBg.png")} style={{ flex: 1 }} resizeMode="cover">
        <Header />
      </ImageBackground>
  );
};

export default DiscoverScreen;
