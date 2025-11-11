import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Header from '../molecules/Header';
import SearchBar from '../molecules/SearchBar';
import BottomNav from '../molecules/BottomNav';

const HomePage = () => (
  <View style={styles.container}>
    <ScrollView>
      <Header title="Helpru" />
      <View style={styles.section}>
        <Text style={styles.greeting}>Hai, Abhiefd 👋</Text>
        <Text style={styles.subtitle}>Mau dibantu apa hari ini?</Text>
      </View>

      <SearchBar placeholder="Cari jasa yang tersedia..." />

      <View style={styles.banner}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
      </View>

      <Text style={styles.sectionTitle}>Rekomendasi Untukmu</Text>
      <View style={styles.recommendations}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.recoImage}
        />
        <Image
          source={require('../assets/logo.png')}
          style={styles.recoImage}
        />
      </View>
    </ScrollView>
    <BottomNav />
  </View>
);

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  section: { paddingHorizontal: 16, marginTop: 16 },
  greeting: { fontSize: 18, fontWeight: '600', color: '#212121' },
  subtitle: { color: '#757575' },
  banner: { margin: 16 },
  image: { width: '100%', height: 180, borderRadius: 12 },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 10,
  },
  recommendations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  recoImage: { width: 165, height: 100, borderRadius: 10 },
});
