import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import Header from '../molecules/Header';
import SearchBar from '../molecules/SearchBar';
import ListItemCard from '../molecules/ListItemCard';
import BottomNav from '../molecules/BottomNav';

interface OrderData {
  id: number;
  name: string;
  role: string;
  tag: string;
  location: string;
  date: string;
  price: string;
  image: any;
  isFavorite: boolean;
}

const initialOrders: OrderData[] = [
  {
    id: 1,
    name: 'Andi Yudha Prasetyo',
    role: 'Ahli AC & Kulkas',
    tag: 'Help Rumah',
    location: 'Manado',
    date: 'Tersedia Hari Ini',
    price: 'Rp150.000',
    image: require('../assets/teknisi.png'),
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Rina Kartika',
    role: 'Kurir & Layanan Paket',
    tag: 'Help Antar',
    location: 'Manado',
    date: 'Tersedia Hari Ini',
    price: 'Rp20.000',
    image: require('../assets/kurir.png'), // Diasumsikan Rina adalah kurir
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Aditya Rahman',
    role: 'Montir & Sekelilingmu',
    tag: 'Help Kendaraan',
    location: 'Manado',
    date: 'Tersedia Hari Ini',
    price: 'Rp30.000',
    image: require('../assets/kurir.png'),
    isFavorite: false,
  },
];

const OrderPage = () => {
  const [orders, setOrders] = useState<OrderData[]>(initialOrders);

  const handleToggleFavorite = (id: number) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === id ? { ...order, isFavorite: !order.isFavorite } : order,
      ),
    );
    Alert.alert(
      'Favorite Toggled',
      `Toggled favorite status for order ID: ${id}`,
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Pesan Jasa" />
        <SearchBar placeholder="Cari jasa yang tersedia..." />
        <View style={styles.listWrapper}>
          {orders.map(order => (
            <ListItemCard
              key={order.id}
              {...order}
              onFavoriteToggle={() => handleToggleFavorite(order.id)}
            />
          ))}
        </View>
      </ScrollView>
      <BottomNav active="Pesan" />
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  listWrapper: {
    paddingHorizontal: 24, // Match padding from FavoritePage
  },
});
