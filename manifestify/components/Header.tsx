import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Header = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.head}>
        <Image 
          style={styles.navIcon}
          source={require('../assets/images/back.png')}
          />
          <Image 
          style={styles.header}
          source={require('../assets/images/manifestly.png')}
          />
          <Image 
          style={styles.logo}
          source={require('../assets/images/Layer_1.png')}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {
    height: 'auto',
    width: 130,
    resizeMode: 'contain',
    zIndex: 333,
  },
  navIcon: {
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo: {
    height: 35,
    width: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  
  
})
export default Header