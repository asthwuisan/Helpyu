import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface OrderCardProps {
  name: string;
  service: string;
  price: string;
  image: any;
}

const OrderCard: React.FC<OrderCardProps> = ({
  name,
  service,
  price,
  image,
}) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.service}>{service}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <Ionicons name="heart-outline" size={22} color="#9E9E9E" />
  </View>
);

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  info: { flex: 1 },
  name: { fontWeight: '600', fontSize: 16, color: '#212121' },
  service: { color: '#757575', fontSize: 14 },
  price: { marginTop: 4, color: '#1E88E5', fontWeight: '500' },
});
