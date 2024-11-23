import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Input from '@/components/Input';
import ConfirmationButton from '@/components/ConfirmationButton';
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';


const LoginScreen: React.FC = () => {
  const router = useRouter(); // Hook para navegação

  const handleLogin = () => {
    // Lógica de autenticação (se houver) pode ser adicionada aqui
    router.push('/home'); // Navega para a tela "home.tsx"
  };

  return (
    <View style={styles.stepContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.titleText}>NATOUR</Text>
        <Image source={require('@/assets/images/folha.png')} style={{ width: 30, height: 30 }} />
      </View>
      <Input placeholder="Digite seu nome" placeholderTextColor="#696969" />
      <Input placeholder="Digite sua senha" placeholderTextColor="#696969" />
      <ConfirmationButton text="LOGIN" onPress={handleLogin} />
      <Link href="./register" style={{ textAlign: 'center', color: 'white', marginTop: 20 }}>
        <Text>
          Não possui uma conta? <Text style={{ fontWeight: 'bold' }}>Cadastre-se</Text>
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 50,
  },
});

export { styles };
export default LoginScreen;