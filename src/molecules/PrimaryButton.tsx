import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, disabled && styles.disabled]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 44,
    backgroundColor: '#1E3A8A',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  disabled: { opacity: 0.6 },
  text: { color: '#fff', fontWeight: '600' },
});
