import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import navigationRoutes from '../constants/navigationRoutes';
import LoginBackground from '../components/LoginBackground';

const RegisterScreen = ({navigation}) => {
  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Image source={CloseIcon} style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    paddingHorizontal: '10%',
    alignItems: 'flex-start',
  },
  icon: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    width: 300,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default RegisterScreen;
