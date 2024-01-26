import { Text, View } from 'react-native';
import React from 'react';

type CustomTitleProps = {
  title?: string;
  subTitle: string;
  marginBottom?: number;
};

export const CustomTitle = ({title = 'No Title', subTitle, marginBottom = 25}: CustomTitleProps) => {

  return (
    <View style={{backgroundColor: 'yellow', marginBottom: marginBottom}}>
      <Text style={{fontSize: 50, textAlign: 'center'}}>{title}</Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{subTitle}</Text>
    </View>
  );

};
