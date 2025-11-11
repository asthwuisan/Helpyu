import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../molecules/Header';
import BottomNav from '../molecules/BottomNav';

const ProfilePage = () => (
  <View style={styles.container}>
    <Header title="Profil" />
    <View style={styles.content}>
      <Text style={styles.name}>Abhiefd</Text>
      <Text style={styles.email}>abhiefd@example.com</Text>
    </View>
    <BottomNav />
  </View>
);

export default ProfilePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 20, fontWeight: '600', color: '#212121' },
  email: { color: '#757575', marginTop: 4 },
});
