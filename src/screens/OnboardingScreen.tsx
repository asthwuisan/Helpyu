import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import { OnboardFlow } from 'react-native-onboard';

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
  return (
    <OnboardFlow
      pages={pages}
      type="fullscreen"
      renderItem={({ title, subtitle, imageUri, currentIndex }) => {
        const bg = pages[currentIndex].backgroundImage;

        return (
          <ImageBackground
            source={bg}
            style={styles.container}
            resizeMode="cover"
          >
            <View style={styles.center}>
              {imageUri && (
                <Image
                  source={{ uri: imageUri }}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
              {title && <Text style={styles.title}>{title}</Text>}
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
          </ImageBackground>
        );
      }}
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
    fontWeight: '375',
    fontHeight: '103',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
