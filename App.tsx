import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import semua halaman dan screen
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { SignIn } from './src/pages/SignIn';
import { SignUp } from './src/pages/SignUp';
import HomePage from './src/pages/HomePage';
import OrderPage from './src/pages/OrderPage';
import FavoritePage from './src/pages/FavoritePage';
import RewardPage from './src/pages/RewardPage';
import ProfilePage from './src/pages/ProfilePage';

export type RootStackParamList = {
  SplashScreen: undefined;
  OnboardingScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  HomePage: undefined;
  OrderPage: undefined;
  FavoritePage: undefined;
  RewardPage: undefined;
  ProfilePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
        <Stack.Screen name="FavoritePage" component={FavoritePage} />
        <Stack.Screen name="RewardPage" component={RewardPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
