import { SignUpForm } from "../components/SignUpForm.tsx";
import { CustomButton } from "../components/CustomButton.tsx";
import { AxiosInstance } from "../interceptor/axios-instance.ts";
import { AsyncStorageKeys, getDataFromAsyncStorage, setDataToAsyncStorage } from "../util/AsyncStorageUtil.ts";
import { ScrollView, TextInput } from "react-native";
import { CustomTitle } from "../components/CustomTitle.tsx";
import React, { createRef, useEffect, useState } from "react";

export const HomeScreen = (props: any) => {

  const [title, setTitle] = useState('IJSE');

  const signUpFormRef = createRef<any>();

  // useEffect(() => {
  //   console.log('Use Effect Called for Every Change');
  // });

  useEffect(() => {
    console.log('Use Effect Called for Title Change');
  }, [title]);

  const onSignUpFormAction = async (text: string) => {
    const title = await getDataFromAsyncStorage(AsyncStorageKeys.TITLE_KEY);
    setTitle(title);
  };

  return (
    <ScrollView>
      <SignUpForm ref={signUpFormRef} onSignUpFormAction={onSignUpFormAction}/>

      <CustomButton
        label={'Go to About Screen'}
        onPress={() => {
          props.navigation.push('AboutScreen');
        }}
      />

      <CustomButton
        label={'Test AXIOS Call: POST'}
        onPress={() => {
          AxiosInstance.post('/post-test', {
            value1: 'Galle',
            value2: 'Panadura',
          }, {
            params: {
              param1: 'panadura',
            },
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(reason => {
              console.log(reason);
            });
        }}
      />

      <CustomButton
        label={'Test AXIOS Call: GET'}
        onPress={() => {
          AxiosInstance.get('/test', {
            params: {
              param1: 'panadura',
            },
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(reason => {
              console.log(reason);
            });
        }}
      />

      <CustomButton
        label={'Set First Name as IJSE'}
        onPress={() => {
          // your code here 1
          signUpFormRef.current.setFirstName('IJSE');
          signUpFormRef.current.setLastName('Sri Lanka');
        }}
      />

      <CustomButton
        label={'Set First Name as IJSE'}
        onPress={() => {
          // your code here 1
          signUpFormRef.current.setFirstName('IJSE');
          signUpFormRef.current.setLastName('Sri Lanka');
        }}
      />

      <CustomButton
        label={'Set Something to Async Storage'}
        onPress={async () => {
          await setDataToAsyncStorage(AsyncStorageKeys.TITLE_KEY, 'Test Title');
        }}
      />

      <TextInput
        style={{borderColor: 'blue', borderWidth: 2, margin: 10}}
        value={title}
        onChange={(val) => {
          setTitle(val.nativeEvent.text);
        }}
      />

      <CustomTitle title={title} subTitle={'this is sub 1'}/>
      <CustomTitle title={'Hello Galle'} subTitle={'this is sub 2'} marginBottom={55}/>
      <CustomTitle title={'Hello Panadura'} subTitle={'this is sub 3'}/>
      <CustomTitle title={'Hello Jaffna'} subTitle={'this is sub 4'}/>
    </ScrollView>
  );


};
