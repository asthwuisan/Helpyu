import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { HeaderLogo } from '../molecules/HeaderLogo';
import { AuthInput } from '../molecules/AuthInput';
import { PasswordInput } from '../molecules/PasswordInput';
import { Checkbox } from '../molecules/Checkbox';
import { PrimaryButton } from '../molecules/PrimaryButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
};

export const SignIn: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // TODO: proses auth
    console.log('login', email, password, remember);
    navigation.replace('HomePage');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <HeaderLogo />
        <View style={styles.card}>
          <AuthInput
            label="Email"
            placeholder="Contoh: helpyu@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <PasswordInput
            label="Kata Sandi"
            placeholder="Contoh: #Sandi123"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.rowBetween}>
            <Checkbox
              checked={remember}
              onToggle={() => setRemember(s => !s)}
              label="Ingat saya"
            />
            <TouchableOpacity>
              <Text style={styles.link}>Lupa kata sandi?</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton
            title="Masuk"
            onPress={handleLogin}
            disabled={!email || !password}
          />

          <View style={styles.center}>
            <Text style={{ color: '#6B7280' }}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.link, { marginLeft: 6 }]}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F6' },
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  link: { color: '#1E3A8A', fontWeight: '600' },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
  },
});
