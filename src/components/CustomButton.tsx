import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

type CustomButtonProps = {
  label: string,
  onPress: () => void,
};

export const CustomButton = ({label, onPress}: CustomButtonProps) => {

  return (
    <TouchableOpacity
      onPress={(val) => {
        onPress();
      }}
      style={{backgroundColor: 'blue', padding: 20, margin: 20, borderRadius: 20}}>
      <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );

};
