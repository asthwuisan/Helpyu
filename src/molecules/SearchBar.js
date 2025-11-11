import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#555" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 45,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },
});
