import React, { useState } from 'react';
import { AuthInput } from './AuthInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

type Props = {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  label?: string;
};

export const PasswordInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  label,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <AuthInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={!visible}
      value={value}
      onChangeText={onChangeText}
      rightIcon={
        <TouchableOpacity onPress={() => setVisible(s => !s)}>
          <Ionicons name={visible ? 'eye' : 'eye-off'} size={20} />
        </TouchableOpacity>
      }
    />
  );
};
