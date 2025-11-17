import React from 'react';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';
import Header from '../molecules/Header';
import BottomNav from '../molecules/BottomNav';

const RewardPage = () => (
  <View style={styles.container}>
    <ScrollView>
      <Header title="Helpru Points" />
      <View style={styles.card}>
        <Text style={styles.point}>80</Text>
        <Text style={styles.label}>Total HelpYu Points</Text>
      </View>

      <View style={styles.history}>
        <Text style={styles.historyItem}>
          3 Sept 2025 - Transaksi Berhasil +50
        </Text>
        <Text style={styles.historyItem}>
          10 Sept 2025 - Mengundang teman +20
        </Text>
        <Text style={styles.historyItem}>
          Akhir Sept - Bonus Akhir Bulan +10
        </Text>
      </View>
    </ScrollView>
    <BottomNav active="Reward" />
  </View>
);

export default RewardPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  card: {
    margin: 16,
    padding: 20,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    alignItems: 'center',
  },
  point: { fontSize: 40, fontWeight: '700', color: '#1E88E5' },
  label: { color: '#424242' },
  history: { marginHorizontal: 16, marginTop: 10 },
  historyItem: { marginBottom: 8, color: '#424242' },
});
