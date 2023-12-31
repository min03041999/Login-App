import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from "react-native-paper";

export const Paragraph = (props) => {
    const { children } = props;

    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
        color: '#fff',
    }
})
