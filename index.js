/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App.tsx';
import { name as appName } from './app.json';
import Header from './src/components/molecules/Header.tsx';
import SearchBar from './src/components/molecules/SearchBar.tsx';
import Category from './src/components/molecules/Category.tsx';
import Banner from './src/components/atom/Banner.tsx';
import ReccomendationSection from './src/components/molecules/ReccomendationSection.tsx';
import BottomNav from './src/components/molecules/BottomNav.tsx';
import HomeScreen from './src/screens/HomeScreen.tsx';
import Header2 from './src/components/molecules/Header2.tsx';
import OrderBox from './src/components/molecules/OrderBox.tsx';
import OrderScreen from './src/screens/OrderScreen.tsx';

AppRegistry.registerComponent(appName, () => HomeScreen);
