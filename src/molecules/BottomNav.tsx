import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
// Icon dari vector-icons tidak lagi digunakan
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // pastikan path benar

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  active: string;
}

const BottomNav: React.FC<Props> = ({ active }) => {
  const navigation = useNavigation<NavProp>();

  const tabs = [
    // Sediakan dua gambar: satu untuk status aktif, satu untuk tidak aktif
    {
      label: 'Home',
      // Ganti dengan path gambar ikon Anda yang sebenarnya
      activeImage: require('../assets/home.png'), // Contoh: ikon berwarna
      inactiveImage: require('../assets/home.png'), // Contoh: ikon abu-abu
      screen: 'HomePage',
    },
    // Lakukan hal yang sama untuk tab lainnya...
    {
      label: 'Pesan',
      activeImage: require('../assets/tindis.png'),
      inactiveImage: require('../assets/tindis.png'),
      screen: 'OrderPage',
    },
    {
      label: 'Favorit',
      activeImage: require('../assets/love.png'),
      inactiveImage: require('../assets/love.png'),
      screen: 'FavoritePage',
    },
    {
      label: 'Reward',
      activeImage: require('../assets/medali.png'),
      inactiveImage: require('../assets/medali.png'),
      screen: 'RewardPage',
    },
    {
      label: 'Profil',
      activeImage: require('../assets/user.png'),
      inactiveImage: require('../assets/user.png'),
      screen: 'ProfilePage',
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.label}
          style={styles.item}
          onPress={() =>
            navigation.navigate(tab.screen as keyof RootStackParamList)
          }
        >
          <Image
            // Pilih gambar berdasarkan status aktif
            source={active === tab.label ? tab.activeImage : tab.inactiveImage}
            style={styles.icon}
            // Hapus tintColor
          />
          <Text
            style={[
              styles.label,
              { color: active === tab.label ? '#0066CC' : '#8e8e8e' },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
