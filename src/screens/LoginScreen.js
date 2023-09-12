import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";
import { Logo } from "../components/Logo";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import Button from "../components/Button";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/features/UserSlice";

export const LoginScreen = ({ navigation }) => {
  const { isPrecessingRequest, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onLoginPress = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const data = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: "DashboardScreen" }],
      });
    }
  }, [isPrecessingRequest, token]);

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Login User</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={!passwordVisible}
        right={
          <Input.Icon
            icon={passwordVisible ? "eye-off" : "eye"}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />

      <Button mode="contained" onPress={onLoginPress}>
        Login
      </Button>

      <Text style={styles.row}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
