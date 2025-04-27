import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando os ícones do Expo

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>nick-ecommerce</Text>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <FontAwesome name="bars" size={30} color="#000" />
      </TouchableOpacity>

      {/* Menu de Hambúrguer */}
      {menuOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Home</Text>
          <Text style={styles.menuItem}>Produtos</Text>
          <Text style={styles.menuItem}>Sobre</Text>
          <Text style={styles.menuItem}>Contato</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  menuButton: {
    padding: 8,
  },
  menu: {
    position: 'absolute',
    top: 66,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dedede',
    width: 150,
    padding: 10,
    zIndex:10
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
});
