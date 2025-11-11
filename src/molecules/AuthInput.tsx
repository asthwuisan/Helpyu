import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = TextInputProps & {
  label?: string;
  error?: string | null;
  rightIcon?: React.ReactNode;
};

export const AuthInput: React.FC<Props> = ({
  label,
  error,
  rightIcon,
  style,
  ...rest
}) => {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputRow]}>
        <TextInput
          {...rest}
          style={[styles.input, style]}
          placeholderTextColor="#9CA3AF"
        />
        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  label: { fontSize: 12, color: '#374151', marginBottom: 6 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  input: { flex: 1, height: 44, fontSize: 14 },
  icon: { marginLeft: 8 },
  error: { color: '#DC2626', fontSize: 12, marginTop: 4 },
});
