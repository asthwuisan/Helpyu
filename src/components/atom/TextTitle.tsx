import React from 'react';
import { Text } from 'react-native';

const TextTitle = ({ children }) => (
  <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
    {children}
  </Text>
);

export default TextTitle;
