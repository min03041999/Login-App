import React, { useState } from 'react';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { Paragraph } from '../components/Paragraph';
import Button  from '../components/Button';

export const StartScreen = ({navigation}) => {
  return (
    <Background>
        <Logo/>
        <Header>Login</Header>
        <Paragraph>Enjoy family time. Spend more moments together.</Paragraph>
        <Button 
          mode = 'contained'
          onPress = {() => navigation.navigate('LoginScreen')}
        >Login</Button>
        <Button 
          mode = 'contained'
          onPress = {() => navigation.navigate('RegisterScreen')}
        >
          Register
        </Button>
    </Background>
  );
}
