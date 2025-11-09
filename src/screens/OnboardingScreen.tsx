import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OnboardFlow } from 'react-native-onboard';
import { Image } from 'react-native';

const OnboardingScreen = () => {
  return (
    <OnboardFlow
      pages={[
        {
          imageUri: Image.resolveAssetSource(require('../assets/frame2.png')) // <-- DIPERBAIKI
            .uri,
          backgroundColor: '#87f156ff',
        },
        {
          title: 'Semua bantuan dalam genggamanmu',
          subtitle:
            'Dari bersih-bersih rumah, servis motor, hingga tutor privat — semua ada di HelpYu!',
          imageUri: Image.resolveAssetSource(require('../assets/frame3.png')) // <-- DIPERBAIKI
            .uri,
        },
        {
          title: 'Page 2 header',
          subtitle: 'This is page 2',
          imageUri: Image.resolveAssetSource(require('../assets/frame4.png')) // <-- DIPERBAIKI
            .uri,
        },
        {
          title: 'Page 2 header',
          subtitle: 'This is page 2',
          imageUri: Image.resolveAssetSource(require('../assets/frame5.png')) // <-- DIPERBAIKI
            .uri,
        },
        {
          title: 'Page 2 header',
          subtitle: 'This is page 2',
          imageUri: Image.resolveAssetSource(require('../assets/frame6.png')) // <-- DIPERBAIKI
            .uri,
        },
      ]}
      type={'fullscreen'}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
