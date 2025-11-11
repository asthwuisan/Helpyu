import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ placeholder }: { placeholder: string }) => (
  <View style={styles.container}>
    <Ionicons name="search-outline" size={20} color="#9E9E9E" />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#9E9E9E"
    />
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    borderRadius: 8,
    margin: 16,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: '#424242',
  },
});
