import {Formik} from 'formik';
import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import * as Yup from 'yup';

import {AppContext} from '../App';
import navigationRoutes from '../constants/navigationRoutes';
import { COLORS } from '../constants/theme';

const LoginScreen = ({navigation}) => {

  const {users, setUser} = useContext(AppContext);
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  const handleLogin = (mail: string, password: string) => {
    console.log(mail, password)
  };

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password can't be empty"),
    email: Yup.string()
      .required("Email can't be empty")
  });

  return (
    <ImageBackground
      source={require('../assets/images/bakcground.png')}
      style={{ flex: 1, resizeMode: 'cover' }}
    >
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={values => {
            handleLogin(values.email, values.password);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={COLORS.blue}
                style={styles.input}
                autoCorrect={false}
                autoFocus={true}
                textContentType='emailAddress'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.blue}
                autoCapitalize='none'
                style={styles.input}
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text style={styles.errorText}>
                {errors.email || errors.password}
              </Text>
              <TouchableOpacity
                disabled={!isValid}
                style={styles.loginButton}
                onPress={() => isValid && handleSubmit()}
              >
                <Text style={styles.loginButtonText}>
                  Giriş yap
                </Text>
              </TouchableOpacity>
              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                  Henüz hesabın yok mu?{" "}
                </Text>
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={() => navigation.navigate(navigationRoutes.registerScreen)}
                >
                  <Text style={styles.registerLink}>
                    Kayıt Ol
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.pink,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: "#2e64e5",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: 'black',
    fontSize: 12,
  },
  registerLink: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default LoginScreen;
