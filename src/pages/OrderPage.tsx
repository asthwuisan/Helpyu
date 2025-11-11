import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from '../molecules/Header';
import SearchBar from '../molecules/SearchBar';
import OrderCard from '../molecules/OrderCard';
import BottomNav from '../molecules/BottomNav';

const OrderPage = () => (
  <View style={styles.container}>
    <ScrollView>
      <Header title="Pesan Jasa" />
      <SearchBar placeholder="Cari jasa yang tersedia..." />

      <OrderCard
        name="Andi Yudha Prasetyo"
        service="Ahli AC & Kulkas - Manado"
        price="Rp150.000"
        image={require('../assets/logo.png')}
      />
      <OrderCard
        name="Rina Kartika"
        service="Kurir & Layanan Paket"
        price="Rp20.000"
        image={require('../assets/logo.png')}
      />
      <OrderCard
        name="Aditya Rahman"
        service="Montir & Sekelilingmu"
        price="Rp30.000"
        image={require('../assets/logo.png')}
      />
    </ScrollView>
    <BottomNav />
  </View>
);

export default OrderPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
});
