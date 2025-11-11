import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecommendationCard = ({ image, title, subtitle, discount, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.discount}>{discount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
  },
  discount: {
    color: '#2E86DE',
    marginTop: 4,
  },
});
