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

const EmailScreen = ({navigation}) => {
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
            <Text style={styles.title}>Can we get your email?</Text>
          </View>
        </View>
        <Formik
          initialValues={{email: ''}}
          validationSchema={LoginSchema}
          onSubmit={values => {
            handleLogin(values.email);
          }}>
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
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Text style={styles.errorText}>{errors.email}</Text>
              <Text style={styles.infoText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                velit amet praesentium nulla vero? Iste, minus. Velit fugiat
                provident accusantium!
              </Text>
              <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => navigation.navigate(navigationRoutes.otpscreen)}>
                <Text style={styles.sendBtnText}>Send</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
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
    marginTop: '10%',
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

export default EmailScreen;
