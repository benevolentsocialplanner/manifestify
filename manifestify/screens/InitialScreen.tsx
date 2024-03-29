import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants/theme';
import navigationRoutes from '../constants/navigationRoutes';
import LoginBackground from '../components/LoginBackground';

const InitialScreen = ({navigation}) => {
  return (
    <LoginBackground>
      <SafeAreaView style={styles.bigContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/Layer_1.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.containerTwo}>
          <Text style={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            cumque, architecto quibusdam libero voluptatem dolor.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(navigationRoutes.emailScreen)}>
            <Text style={styles.btnText}>Sign In with E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Clicked');
            }}>
            <Text style={styles.btnText}>Sign In with AppleID</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Clicked');
            }}>
            <Text style={styles.btnText}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>
          Lorem ipsum dolor sit amet in letzy.
          </Text>
          <Text>
          Lorem ipsum.
          </Text>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerTwo: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    width: 270,
    textAlign: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
  btnText: {
    color: COLORS.purple,
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    borderColor: COLORS.pink,
    color: COLORS.textColor,
  },
});

export default InitialScreen;
