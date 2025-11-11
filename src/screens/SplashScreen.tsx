import { StyleSheet, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Ganti layar saat ini dengan OnboardingScreen agar pengguna tidak bisa kembali ke splash screen
      navigation.replace('OnboardingScreen');
    }, 3000); // 3 detik

    return () => clearTimeout(timer); // Membersihkan timer jika komponen dilepas
  }, [navigation]);

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
});
