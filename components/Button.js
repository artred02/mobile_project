import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Button({ title, onPress, style, textStyle }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <View style={styles.view}>
                    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#34495e',
        marginVertical: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});