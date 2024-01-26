import { ScrollView } from "react-native";
import { CustomButton } from "../components/CustomButton.tsx";
import React from "react";
import { CustomTitle } from "../components/CustomTitle.tsx";

export const AboutScreen = (props: any) => {

  return (
    <ScrollView>
      <CustomTitle
        title={'This is the About Page'}
        subTitle={'Click the below button to Go Back'}/>

      <CustomButton
        label={'Go Back'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </ScrollView>
  );

};
