import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
