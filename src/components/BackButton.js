import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Arrow from "../../assets//arrow_back.png";

export const BackButton = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image style={styles.image} source={Arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 0,
  },
  image: {
    width: 24,
    height: 24,
  },
});
