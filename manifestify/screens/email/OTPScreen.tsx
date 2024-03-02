import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import navigationRoutes from '../../constants/navigationRoutes';
import LoginBackground from '../../components/LoginBackground';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AppContext} from '../../App';
import {COLORS} from '../../constants/theme';
import {OtpInput} from 'react-native-otp-entry';

const OTPScreen = ({navigation}) => {
  const handleLogin = (mail: string) => {
    console.log(mail);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Email can't be empty"),
  });

  return (
    <LoginBackground>
      <SafeAreaView style={{flex: 1, marginHorizontal: '10%'}}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('loginScreen');
              }}>
              <Image
                source={require('../../assets/images/closeIcon.png')}
                style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter 4 digits</Text>
          </View>

          <OtpInput
            numberOfDigits={4}
            focusColor="green"
            focusStickBlinkingDuration={500}
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            theme={{
              containerStyle: styles.container,
              inputsContainerStyle: styles.inputsContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
          <View style={{flex: 5, marginTop: '-10%'}}>
            <Text style={styles.infoText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit
              amet praesentium nulla vero? Iste, minus. Velit fugiat provident
              accusantium!
            </Text>
            <View style={{flex: 1, marginTop: '-10%'}}>
              <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => navigation.navigate(navigationRoutes.otpscreen)}>
                <Text style={styles.sendBtnText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '30%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  titleContainer: {
    width: 130,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputsContainer: {
    borderColor: 'blue',
  },
  pinCodeContainer: {
    borderColor: 'blue',
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    flex: 1,
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    height: 60,
    borderRadius: 30,
    tintColor: 'red',
    borderWidth: 3,
    borderColor: 'blue',
    paddingHorizontal: 20,
  },
  errorText: {
    marginTop: 10,
  },
  formContainer: {
    flex: 3,
    marginTop: '-20%',
  },
  sendBtn: {
    width: '100%',
    backgroundColor: 'blue',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'blue',
    paddingHorizontal: 20,
  },
  sendBtnText: {
    color: 'white',
    fontSize: 22,
    textTransform: 'uppercase',
  },
});

export default OTPScreen;
