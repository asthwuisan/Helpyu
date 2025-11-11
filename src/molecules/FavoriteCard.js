import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FavoriteCard = ({ image, name, service, price }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.service}>{service}</Text>
        <Text style={styles.price}>Rp {price}</Text>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginVertical: 6,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  service: {
    color: '#777',
    fontSize: 12,
  },
  price: {
    color: '#2E86DE',
    marginTop: 4,
  },
});
