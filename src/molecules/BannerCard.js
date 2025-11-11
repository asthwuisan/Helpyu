import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BannerCard = ({ image, title, discount, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        {discount && <Text style={styles.discount}>{discount}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 197,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  discount: {
    color: '#FFD700',
    fontSize: 14,
  },
});
