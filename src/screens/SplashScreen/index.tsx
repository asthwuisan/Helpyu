import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Logo from '../assets/logo.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6CF7B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 412,
    height: 412,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});
