import React from 'react';
import { View, Text, Image } from 'react-native';
import Input from '@/components/Input';
import ConfirmationButton from '@/components/ConfirmationButton';
import { styles } from '../index';

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.stepContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.titleText}>NATOUR</Text>
        <Image source={require('@/assets/images/folha.png')} style={{ width: 30, height: 30 }} />
      </View>
      <Input placeholder="Digite seu nome" placeholderTextColor="#696969" />
      <Input placeholder="Digite sua senha" placeholderTextColor="#696969" />
      <Input placeholder="Confirme sua senha" placeholderTextColor="#696969" />
      <ConfirmationButton text = "CADASTRAR"/>
    </View>
  );
};

export default RegisterScreen;
