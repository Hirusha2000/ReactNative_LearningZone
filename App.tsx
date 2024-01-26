/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createRef, useContext, useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CustomTitle } from "./src/components/CustomTitle";
import { SignUpForm } from "./src/components/SignUpForm";
import { CustomButton } from "./src/components/CustomButton";
import { AsyncStorageKeys, getDataFromAsyncStorage, setDataToAsyncStorage } from "./src/util/AsyncStorageUtil";
import { LanguageContext } from "./src/contexts/LanguageContext";
import axios from "axios";
import { AxiosInstance } from "./src/interceptor/axios-instance.ts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen.tsx";
import { AboutScreen } from "./src/screens/AboutScreen.tsx";
// import styles, { styles2 } from "./src/styles/styles";
// import { styles, styles2 } from "./src/styles/styles";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'si'>('en');

  const loadPreviouslySelectedLanguage = async () => {
    const lang = await getDataFromAsyncStorage(AsyncStorageKeys.SELECTED_LANG_KEY);
    setSelectedLanguage((lang as 'en' | 'si') || 'en');
  };

  useEffect(() => {
    console.log('Use Effect Called Just Once');
    loadPreviouslySelectedLanguage();
  },[]);

  return (
    <NavigationContainer>
      <LanguageContext.Provider value={selectedLanguage}>
        <SafeAreaView style={{display: 'flex', width: '100%', height: '100%', flexDirection: 'column'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <CustomButton
              label={'English'}
              onPress={async () => {
                await setDataToAsyncStorage(AsyncStorageKeys.SELECTED_LANG_KEY, 'en');
                setSelectedLanguage('en');
              }}
            />
            <CustomButton
              label={'Sinhala'}
              onPress={async () => {
                await setDataToAsyncStorage(AsyncStorageKeys.SELECTED_LANG_KEY, 'si');
                setSelectedLanguage('si');
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
              <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
              <Stack.Screen name={'AboutScreen'} component={AboutScreen} />
            </Stack.Navigator>
          </View>
        </SafeAreaView>
      </LanguageContext.Provider>
    </NavigationContainer>
  );

}

export default App;
