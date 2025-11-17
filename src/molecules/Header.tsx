import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#FAFAFA',
        elevation: 15,
        paddingTop: 50,
        paddingBottom: 15,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        {/* Tombol Kembali */}
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#3B8ED1', marginLeft: 15 }}>
            Kembali
          </Text>
        </TouchableOpacity>

        {/* Judul */}
        <View style={{ flex: 1, alignItems: 'center', marginLeft: -40 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#202C60' }}>
            Favorite
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
