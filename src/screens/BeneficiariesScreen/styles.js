import React from "react";
import { StyleSheet } from "react-native";

const Colors = (theme) => {
    if (theme === "dark") {
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: "#34495e",
        },
        textbutton:{
            color: "#fff",
        },
        btnAddBenef:{
            backgroundColor: "#2c3e50",
        },
        beneficiary: {
            backgroundColor: "#2c3e50",
        },
    },
    light: {
        container: {
            backgroundColor: "#dcdde1",
        },
        textbutton:{
            color: "#000",
        },
        btnAddBenef:{
            backgroundColor: "#3498db",
        },
        beneficiary: {
            backgroundColor: "#3498db",
        },
    },
    container:{
        flex: 1,
    },
    btnAddBenef:{
        borderRadius: 5,
        height: 50,
        width: 300,
    },
    flatList:{
        height: "60%",
    },
    viewButton:{
        alignContent: "center",
        justifyContent: "center",
    },
    
    input_double: {
        height: 48,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 10,
        paddingLeft: 10,
        width: 115,
    },
    input: {
        height: 48,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 10,
        paddingLeft: 10,
        width: 250,
    },
    containerViewModale: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_double_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    btnAddBenef: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
    },
    beneficiary: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});

export {styles, Colors};