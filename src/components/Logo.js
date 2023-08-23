import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LogoImage from '../../assets/logo.png';

export const Logo = () => {
  return (
    <Image source={LogoImage} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      marginBottom: 8,
    },
  })