import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { BackButton } from '../components/BackButton';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { TextInput } from '../components/TextInput';
import Button from "../components/Button";
import { theme } from '../core/theme';
import { TextInput as Input } from 'react-native-paper';
import { nameValidator } from '../helpers/nameValidator';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { rePasswordValidator } from "../helpers/rePasswordValidator";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../store/features/UserSlice";
import Toast from 'react-native-toast-message';

export const RegisterScreen = ({ navigation }) => {
  const { isPrecessingRequest, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [rePassword, setRePassword] = useState({ value: '', error: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toastRef = useRef(null);


  const onSignUpPressed = async () => {
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    const rePasswordError = rePasswordValidator(password, rePassword);

    if (emailError || passwordError || nameError || rePasswordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setRePassword({ ...rePassword, error: rePasswordError });
      return;
    }

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    }

    dispatch(registerUser(data));
  }

  useEffect(() => {
    Toast.setRef(toastRef.current);

    if (isPrecessingRequest === true) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: message,
        leadingIcon: 0,
      });
      // return <Alert />;
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "LoginScreen" }],
      // })
    }
    if (isPrecessingRequest === false) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: message,
        leadingIcon: 0,
      });
    }
  }, [isPrecessingRequest]);

  return (
    <Background>
      <Toast ref={toastRef} />

      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Register User</Header>

      <TextInput label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput label="Password"
        returnKeyType="next"
        secureTextEntry={!passwordVisible}
        right={
          <Input.Icon
            icon={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
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
        value={rePassword.value}
        onChangeText={(text) => setRePassword({ value: text, error: '' })}
        error={!!rePassword.error}
        errorText={rePassword.error}
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