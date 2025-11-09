import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <OnboardingScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
