import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
