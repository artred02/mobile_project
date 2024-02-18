import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Button({ title, onPress, style, textStyle }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6646ee',
        marginVertical: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
});