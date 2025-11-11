import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, { useMemo } from 'react';
import { OnboardFlow } from 'react-native-onboard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnboardingScreen'
>;
const { width, height } = Dimensions.get('window');

const pages = [
  {
    imageUri: Image.resolveAssetSource(require('../assets/logo.png')).uri,
    backgroundImage: require('../assets/background.png'),
    title: 'Selamat Datang!',
    subtitle: 'Satu sentuhan untuk menemukan bantuan terbaik di sekitarmu.',
  },
  {
    title: 'Semua bantuan dalam genggamanmu',
    subtitle:
      'Dari bersih-bersih rumah, servis motor, hingga tutor privat — semua ada di HelpYu!',
    imageUri: Image.resolveAssetSource(require('../assets/frame3.png')).uri,
    backgroundImage: require('../assets/background.png'),
  },
  {
    title:
      'Nggak perlu repot keliling, cukup ketik dan jasa terbaik langsung muncul!',
    subtitle:
      'Cari berdasarkan kategori, lokasi, atau ulasan. Semua ada di satu tempat.',
    imageUri: Image.resolveAssetSource(require('../assets/frame4.png')).uri,
    backgroundImage: require('../assets/background.png'),
  },
  {
    title: 'Semua bantuan dalam genggamanmu',
    subtitle:
      'Dari bersih-bersih rumah, servis motor, hingga tutor privat — semua ada di HelpYu!',
    imageUri: Image.resolveAssetSource(require('../assets/frame5.png')).uri,
    backgroundImage: require('../assets/background.png'),
  },
  {
    title: 'Page 2 header',
    subtitle: 'This is page 2',
    imageUri: Image.resolveAssetSource(require('../assets/frame6.png')).uri,
    backgroundImage: require('../assets/background.png'),
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation<NavProp>();

  const handleOnDone = () => {
    // Ganti layar saat ini dengan SignIn agar pengguna tidak bisa kembali ke onboarding
    navigation.replace('SignIn');
  };

  // Menggunakan useMemo untuk menghindari pembuatan ulang fungsi renderItem yang berat
  const memoizedRenderItem = useMemo(
    () =>
      ({ page }) => {
        return (
          <ImageBackground
            source={page.backgroundImage}
            style={styles.container}
            resizeMode="cover"
          >
            <View style={styles.center}>
              {page.imageUri && (
                <Image
                  source={{ uri: page.imageUri }}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
              {page.title && <Text style={styles.title}>{page.title}</Text>}
              {page.subtitle && (
                <Text style={styles.subtitle}>{page.subtitle}</Text>
              )}
            </View>
          </ImageBackground>
        );
      },
    [],
  );

  return (
    <OnboardFlow
      pages={pages}
      type="fullscreen"
      onDone={handleOnDone}
      renderItem={memoizedRenderItem}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 309,
    height: 250,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Urbanist-ExtraBold',
    fontSize: 20,
    fontWeight: '800', // 'ExtraBold' is typically 800
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
