import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { theme } from "../core/theme";
import BackGround from "../../assets/bg-image.avif";


export const Background = ({ children }) => {
    return (
        <ImageBackground source={BackGround} style={styles.background}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
        // <ImageBackground source={BackGround} style={styles.background}>
        //     <KeyboardAvoidingView style={styles.container} behavior="padding">
        //         {children}
        //     </KeyboardAvoidingView>
        // </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    }, container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
