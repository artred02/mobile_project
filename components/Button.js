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
        backgroundColor: '#34495e',
        marginVertical: 10,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
});