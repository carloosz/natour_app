import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ConfirmationButtonProps {
  text: string;
  onPress?: () => void; // Adicionando a propriedade onPress como opcional
}

const ConfirmationButton: React.FC<ConfirmationButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress} // Passa a função onPress para o TouchableOpacity
      style={{
        backgroundColor: "#3CB371",
        padding: 15,
        marginHorizontal: 40,
        marginTop: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ConfirmationButton;

