import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

const SplashScreen = ({ navigation, isFirstLaunch }) => {
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      console.log(isFirstLaunch);
      
      if (isFirstLaunch) {
        navigation.replace('tutorial'); 
      } else {
        navigation.replace('login'); 
      }
    }, 2000); 
  }, [isFirstLaunch, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: logoScale }],
            opacity: logoOpacity,
          },
        ]}
      >
        <Image
          source={require('../assets/Animation.gif')}
          style={styles.logo}
        />
      </Animated.View>
      <Text style={styles.text}>Welcome to MyApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;
