import {Text, SafeAreaView} from 'react-native'
import navigationRoutes from '../constants/navigationRoutes'

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>RegisterScreen</Text>
      <Text onPress={()=> navigation.navigate(navigationRoutes.loginScreen)}>Login Screen</Text>
    </SafeAreaView>
  )
}

export default RegisterScreen