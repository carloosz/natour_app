// src/app/drawerMenu.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const DrawerMenu = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Limpar sessão ou qualquer outro dado de autenticação
    console.log('Usuário deslogado');
    router.push('./index'); // Navega para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Button title="Home" onPress={() => router.push('/home')} />
      {/* <Button title="Outras Páginas" onPress={() => router.push('/otherpage')} /> */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DrawerMenu;
