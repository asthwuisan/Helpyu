import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const HeaderLogo: React.FC<{ title?: string; subtitle?: string }> = ({
  title = 'Helpyu',
  subtitle = 'Daftar atau masuk untuk melanjutkan\nHanya butuh waktu satu menit',
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 16 },
  logo: { width: 84, height: 84, marginBottom: 8 },
  textWrap: { alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '700' },
  subtitle: { fontSize: 12, color: '#6B7280', textAlign: 'center' },
});
