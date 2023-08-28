import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Background } from '../components/Background';
import { BackButton } from '../components/BackButton';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { TextInput } from '../components/TextInput';
import Button from "../components/Button";
import { theme } from '../core/theme';
import { TextInput as Input } from 'react-native-paper';
import { nameValidator } from '../helpers/nameValidator';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import UserApi from '../Api/UserApi';

export const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const [passwordVisible, setPasswordVisible] = useState(false);


  const onSignUpPressed = async () => {
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (nameError || emailError || passwordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    await UserApi.registerUser(data).then((res) => {
      console.log(res);
    });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Register User</Header>

      <TextInput label="Name" returnKeyType="next" />

      <TextInput label="Email" returnKeyType="next" />

      <TextInput label="Password"
        returnKeyType="next"
        secureTextEntry={!passwordVisible}
        right={
          <Input.Icon
            icon={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />

      <TextInput label="Re-Password"
        returnKeyType="done"
        secureTextEntry={!passwordVisible}
        right={
          <Input.Icon
            icon={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />

      <Button
        mode="contained"
        onPress={onSignUpPressed}
      >
        Sign Up
      </Button>

      <Text style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </Text>
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