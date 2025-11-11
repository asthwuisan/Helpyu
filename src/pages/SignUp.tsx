import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { HeaderLogo } from '../molecules/HeaderLogo';
import { AuthInput } from '../molecules/AuthInput';
import { PasswordInput } from '../molecules/PasswordInput';
import { PasswordCriteria } from '../molecules/PasswordCriteria';
import { PrimaryButton } from '../molecules/PrimaryButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export const SignUp: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const validLength = password.length >= 8 && password.length <= 20;
  const hasNumber = /\d/.test(password);
  const passwordsMatch = password && password === confirm;

  const canSubmit = useMemo(
    () => validLength && hasNumber && passwordsMatch && email.length > 0,
    [validLength, hasNumber, passwordsMatch, email],
  );

  const handleRegister = () => {
    console.log('register', { name, phone, email });
    navigation.replace('HomePage');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <HeaderLogo title="Daftar" subtitle="" />
          <View style={styles.card}>
            <AuthInput
              label="Nama lengkap"
              placeholder="Nama lengkap"
              value={name}
              onChangeText={setName}
            />
            <AuthInput
              label="No. Ponsel"
              placeholder="08xxxxxxxxxx"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <AuthInput
              label="Email"
              placeholder="email@contoh.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <PasswordInput
              label="Buat kata sandi"
              placeholder="Buat kata sandi"
              value={password}
              onChangeText={setPassword}
            />
            <AuthInput
              label="Ulangi kata sandi"
              placeholder="Ulangi kata sandi"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
            />
            <PasswordCriteria validLength={validLength} hasNumber={hasNumber} />

            <PrimaryButton
              title="Daftar"
              onPress={handleRegister}
              disabled={!canSubmit}
            />

            <View style={styles.centerRow}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.link}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F6' },
  container: { padding: 24, justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 18, borderRadius: 8 },
  centerRow: { alignItems: 'center', marginTop: 12 },
  link: { color: '#1E3A8A', fontWeight: '600' },
});
