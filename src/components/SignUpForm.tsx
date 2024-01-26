import { Text, TextInput, View } from "react-native";
import React, { forwardRef, useContext, useImperativeHandle, useReducer, useState } from "react";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { getTranslatedText } from "../util/LanguageUtil";
import { LanguageContext } from "../contexts/LanguageContext";

type FormState = {
  firstName: string;
  firstNameError: string | null;

  lastName: string;
  lastNameError: string | null;

  address: string;
  addressError: string | null;
}

type FormFieldSetAction = {
  formFieldName: string;
  formFieldValue: string;
}

const formFieldSetReducer = (state: FormState, action: FormFieldSetAction): FormState => {
  switch (action.formFieldName) {
    case 'firstName': {
      return {
        ...state,
        firstName: action.formFieldValue,
        firstNameError: !action.formFieldValue ? 'Please enter your first name' : null,
      };
    }
    case 'lastName': {
      return {
        ...state,
        lastName: action.formFieldValue,
        lastNameError: null,
      };
    }
    case 'address': {
      return {
        ...state,
        address: action.formFieldValue,
        addressError: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const SignUpForm = forwardRef((props: {onSignUpFormAction: (text: string) => void}, ref) => {

  // const [name, setName] = useState('');
  // const [nameError, setNameError] = useState('');

  useImperativeHandle(ref, () => {
    return {
      setFirstName: (text: string) => {
        dispatch({formFieldName: 'firstName', formFieldValue: text});
      },
      setLastName: (text: string) => {
        dispatch({formFieldName: 'lastName', formFieldValue: text});
      },
    };
  });

  const [state, dispatch] = useReducer<(state: FormState, action: FormFieldSetAction) => FormState>(
    formFieldSetReducer,
    {
      firstName: '',
      firstNameError: null,

      lastName: '',
      lastNameError: null,

      address: '',
      addressError: null,
    }
  );

  const selectedLanguage = useContext<'en' | 'si'>(LanguageContext);

  return (
    <View style={{backgroundColor: 'skyblue', marginVertical: 25}}>

      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
        {getTranslatedText('signUp', selectedLanguage)}
      </Text>

      <CustomInput
        label={getTranslatedText('firstName', selectedLanguage)}
        value={state.firstName}
        onValueChange={(val) => dispatch({formFieldName: 'firstName', formFieldValue: val})}
        error={state.firstNameError}
      />

      <CustomInput
        label={getTranslatedText('lastName', selectedLanguage)}
        value={state.lastName}
        onValueChange={(val) => dispatch({formFieldName: 'lastName', formFieldValue: val})}
        error={state.lastNameError}
      />

      <CustomInput
        label={'Address'}
        value={state.address}
        onValueChange={(val) => dispatch({formFieldName: 'address', formFieldValue: val})}
        error={state.addressError}
      />

      <CustomButton
        label={'Set Home Title as Software Engineer'}
        onPress={() => {
          // your code here 2
          props.onSignUpFormAction('Software Engineer');
        }}
      />

    </View>
  );

});
