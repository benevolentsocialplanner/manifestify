import React from 'react'
import Header from '../components/Header'
import { View } from 'react-native'
import LoginBackground from '../components/LoginBackground'


const DiscoverScreen = () => {
  return (
    <View>
      <LoginBackground bg="discoverBg.png">
        <Header/>
      </LoginBackground>
    </View>
  )
}

export default DiscoverScreen