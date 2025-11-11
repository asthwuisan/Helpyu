import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardCard = ({ date, desc, points }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Text style={styles.points}>+{points}</Text>
    </View>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 6,
    elevation: 1,
  },
  date: {
    color: '#777',
    fontSize: 12,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
  },
  points: {
    fontWeight: '700',
    color: '#2E86DE',
  },
});
