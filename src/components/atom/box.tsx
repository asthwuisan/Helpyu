import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Box = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    ></TouchableOpacity>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 197,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
