import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import navigationRoutes from '../../constants/navigationRoutes';
import LoginBackground from '../../components/LoginBackground';
import {AppContext} from '../../App';
import {COLORS} from '../../constants/theme';
import {OtpInput} from 'react-native-otp-entry';
import React from 'react';
import axios from 'axios';
import apiRoutes from '../../constants/apiRoutes';

const OTPScreen = ({route, navigation}) => {
  const {otp, mail} = route.params;
  const {setUser} = React.useContext(AppContext);
  
  const [inputText, setInputText] = React.useState('');

  const handleLogin = () => {
    axios.post(apiRoutes.verifyOtpEndpoint, {
      otp: otp,
      email: mail
    }).then((res)=>{
      const obj: OTPVerifyResponse = res.data;
      setUser(obj.user);
      navigation.navigate(navigationRoutes.homeScreen)
    }).catch((err)=>{
      console.log(err);
    })   
  };


  return (
    <LoginBackground>
      <SafeAreaView style={{flex: 1, marginHorizontal: '10%'}}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.push(navigationRoutes.initialScreen);
              }}>
              <Image
                source={require('../../assets/images/closeIcon.png')}
                style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Gelen 4 haneli kodu gir</Text>
          </View>
          <OtpInput
            numberOfDigits={4}
            focusColor={COLORS.blue}
            focusStickBlinkingDuration={500}
            value={inputText}
            autoFocus={true}
            onTextChange={text => setInputText(text)}
            theme={{
              containerStyle: styles.container,
              inputsContainerStyle: styles.inputsContainer,
              pinCodeTextStyle: styles.pinCodeText,
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
                onPress={() => handleLogin()}>
                <Text style={styles.sendBtnText}>NEXT</Text>
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
    marginVertical: '20%',
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
    borderColor: COLORS.blue,
  },
  pinCodeContainer: {
    borderColor: COLORS.blue,
    borderWidth: 1,
    width: 70,
    borderRadius: 30,
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
    backgroundColor: COLORS.purple,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.purple,
    paddingHorizontal: 20,
  },
  pinCodeText: {
    color: COLORS.blue
  },
  sendBtnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default OTPScreen;
