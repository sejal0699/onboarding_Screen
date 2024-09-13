import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Footer extends Component {
  render(){
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.tabs}>
        <Image source={require('../assets/home.png')} style={styles.tabIcon} />
        <Text style={styles.text}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Image source={require('../assets/shop.png')} style={styles.tabIcon} />
        <Text style={styles.text}>SHOP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Image source={require('../assets/setting.png')} style={styles.tabIcon} />
        <Text style={styles.text}>SCHEDULE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Image source={require('../assets/account.png')} style={styles.tabIcon} />
        <Text style={styles.text}>ACCOUNT</Text>
      </TouchableOpacity>
   
    </View>

  )
}
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    margin: 4,
    alignItems: 'center',

  },
  tabs: {
    borderTopWidth: 4,
    borderTopColor: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  
  },
  tab: {

  },
  tabIcon: {
    width: 32,
    height: 30,
    resizeMode: 'contain',
    marginTop: 6,
    alignSelf: 'center',

  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
  }
});


export default Footer
