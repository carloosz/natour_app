import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ConfirmationButton = ({ text }: { text: string }) => {
    console.log(text)
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#3CB371",
                padding: 15,
                marginHorizontal: 40,
                marginTop: 50 ,
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

export default ConfirmationButton