import React, { useState } from 'react';

import { Background } from '../components/Background';
import { BackButton } from '../components/BackButton';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { TextInput } from '../components/TextInput';
import Button from '../components/Button';
import { TextInput as Input } from 'react-native-paper';

export const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const Login = () => {
    console.log("Login is successfully");
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack}/>
      <Logo />
      <Header>Login User</Header>

      <TextInput  label="Email" 
                  returnKeyType="next"/>

      <TextInput 
                  label="Password" 
                  returnKeyType="done"
                  secureTextEntry={!passwordVisible}
                  right={
                    <Input.Icon
                      icon={passwordVisible ? "eye-off" : "eye"}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  }/>

      <Button mode="contained"
              onPress={Login}>
        Login
      </Button>
    </Background>
  )
}
