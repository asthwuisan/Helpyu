import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import semua halaman
import HomePage from './src/pages/HomePage';
import OrderPage from './src/pages/OrderPage';
import FavoritePage from './src/pages/FavoritePage';
import RewardPage from './src/pages/RewardPage';
import ProfilePage from './src/pages/ProfilePage';

export type RootStackParamList = {
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
