import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryButton = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={24} color="#fff" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 70,
  },
  iconWrapper: {
    backgroundColor: '#2E86DE',
    borderRadius: 50,
    padding: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
