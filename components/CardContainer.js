import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.card}>
          <Image source={require('../assets/gal.png')}  style={styles.image} />
          <Text style={styles.text}>Membership</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/gal.png')}  style={styles.image} />
          <Text style={styles.text}>Washes</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.cards}>
          <Image source={require('../assets/gal.png')} style={styles.image} />
          <Text style={styles.text}>Washbooks</Text>
        </View>
        <View style={styles.cards}>
          <Image source={require('../assets/gal.png')}  style={styles.image} />
          <Text style={styles.text}>Gift Cards</Text>
        </View>
        <View style={styles.cards}>
          <Image source={require('../assets/gal.png')}  style={styles.image} />
          <Text style={styles.text}>Schedule</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius:15,
marginTop:2,
    margin:-4,
    marginLeft:8
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    flex: 1,
  },
  card: {
    width: 173,
    height: 172,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, 
    borderRadius:15
  },
  cards:{
    width: 173,
    height: 112,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, 
    borderRadius:15
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default CardContainer;
