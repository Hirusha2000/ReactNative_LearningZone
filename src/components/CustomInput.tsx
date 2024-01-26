import { Text, TextInput, View } from "react-native";
import React from "react";

type CustomInputProps = {
  label: string,
  value: string,
  onValueChange: (value: string) => void,
  error: string | null
};

export const CustomInput = ({label, value, onValueChange, error}: CustomInputProps) => {

  return (
    <View style={{margin: 10}}>
      <Text style={{marginBottom: 10}}>{label}</Text>
      <TextInput
        style={{borderColor: 'blue', borderWidth: 2}}
        value={value}
        onChange={(val) => {
          onValueChange(val.nativeEvent.text);
        }}
      />
      {
        error ? <Text style={{color: 'red'}}>{error}</Text> : null
      }
    </View>
  );

};
