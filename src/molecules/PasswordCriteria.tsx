import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PasswordCriteria: React.FC<{
  validLength: boolean;
  hasNumber: boolean;
}> = ({ validLength, hasNumber }) => {
  return (
    <View style={{ marginTop: 8 }}>
      <View style={styles.row}>
        <Ionicons
          name={validLength ? 'checkmark-circle' : 'ellipse-outline'}
          size={14}
        />
        <Text style={styles.text}> Harus 8 - 20 karakter</Text>
      </View>
      <View style={styles.row}>
        <Ionicons
          name={hasNumber ? 'checkmark-circle' : 'ellipse-outline'}
          size={14}
        />
        <Text style={styles.text}>
          {' '}
          Harus ada min. 1 angka atau simbol (0-9@#$)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  text: { fontSize: 12, color: '#4B5563' },
});
