import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../molecules/Header';
import OrderCard from '../molecules/OrderCard';
import BottomNav from '../molecules/BottomNav';

const FavoritePage = () => (
  <View style={styles.container}>
    <ScrollView>
      <Header title="Favorit" />
      <OrderCard
        name="Andi Yudha Prasetyo"
        service="Ahli AC & Kulkas - Manado"
        price="Rp150.000"
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

export default FavoritePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
});
