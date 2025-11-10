import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timer 2 detik sebelum pindah (bisa disesuaikan)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? <SplashScreen /> : <OnboardingScreen />}
    </View>
  );
};

export default App;
