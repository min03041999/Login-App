import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Background } from '../components/Background';
import { BackButton } from '../components/BackButton';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { TextInput } from '../components/TextInput';
import  Button  from "../components/Button";
import { theme } from '../core/theme';
import { TextInput as Input } from 'react-native-paper';

export const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);


  const onSignUpPressed = () => {
    console.log("123");
  }

  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo/>
        <Header>Register User</Header>
      
        <TextInput label="Name" returnKeyType="next"/>

        <TextInput label="Email" returnKeyType="next"/>

        <TextInput  label="Password" 
                    returnKeyType="next" 
                    secureTextEntry={!passwordVisible}
                    right={
                      <Input.Icon
                        icon={passwordVisible ? 'eye-off' : 'eye'}
                        onPress={()=> setPasswordVisible(!passwordVisible)}
                      />
                    }
                    />
        
        <TextInput  label="Re-Password" 
                    returnKeyType="done" 
                    secureTextEntry={!passwordVisible}
                    right={
                      <Input.Icon
                        icon={passwordVisible ? 'eye-off' : 'eye'}
                        onPress={()=> setPasswordVisible(!passwordVisible)}
                      />
                    }
                    />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        >
        Sign Up
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})