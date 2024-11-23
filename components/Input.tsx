import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

// Defina a interface das props do componente Input
interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder,placeholderTextColor,  ...rest }) => {
  return (
    <TextInput
        editable={true}
        style={styles.input}
        placeholder={placeholder} 
        placeholderTextColor={placeholderTextColor || 'gray'}
        onFocus={() => console.log('Input focused!')} // Adicione isso para testar
        {...rest}
    />
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginHorizontal: 40,
      marginVertical: 10,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: '#1C1C1C', // Defina uma cor de fundo para facilitar a visualização
      paddingLeft: 15
    },
  });

export default Input;