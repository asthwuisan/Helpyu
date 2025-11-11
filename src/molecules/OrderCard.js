import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderCard = ({ image, name, role, desc, price, onFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {desc}
        </Text>
        <Text style={styles.price}>Rp {price}</Text>
      </View>
      <TouchableOpacity onPress={onFavorite}>
        <Ionicons name="heart-outline" size={22} color="#2E86DE" />
      </TouchableOpacity>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  role: {
    color: '#777',
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
    marginVertical: 2,
  },
  price: {
    fontWeight: '700',
    color: '#2E86DE',
    marginTop: 5,
  },
});
