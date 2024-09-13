import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../components/SplashScreen';
import TutorialScreen from '../components/TutorialScreen';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import HomePage from '../components/HomePage';
import VerificationScreen from '../components/VerificationScreen';
import ForgotPasswordScreen from '../components/ForgetPasswordScreen';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    const [isFirstLaunch, setIsFirstLaunch] = useState(null); 
  
    useEffect(() => {
      const checkFirstLaunch = async () => {
        
        try {
          const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
          console.log(alreadyLaunched);
          
          if (alreadyLaunched === null) {
            await AsyncStorage.setItem('alreadyLaunched', 'true');
            setIsFirstLaunch(true); 
          } else {
            setIsFirstLaunch(false); 
          }
        } catch (error) {
          console.error('Error checking first launch status:', error);
        }
      };
  
      checkFirstLaunch();
    }, []);
  
    if (isFirstLaunch === null) {
      return null;
    }
  
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen 
      name="SplashScreen" 
      options={{ headerShown: false }}>
      {props => <SplashScreen {...props} isFirstLaunch={isFirstLaunch} />} 
    </Stack.Screen>
    <Stack.Screen name="tutorial" component={TutorialScreen} options={{ headerShown: false }} />
    <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
    <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
    <Stack.Screen name="verify" component={VerificationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="forgetPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
  )
}

export default AuthStack