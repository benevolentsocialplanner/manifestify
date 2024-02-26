import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

const HomeScreen = () => {
  return (
    
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
});

export default HomeScreen;
