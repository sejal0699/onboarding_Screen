import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Navigation/AuthStack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <AuthStack/>
    </NavigationContainer>
  );
};

export default App;
