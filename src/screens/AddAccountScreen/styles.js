import { StyleSheet } from "react-native";

const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: "#34495e",
        },
        buttonAdd: {
            backgroundColor: "#2c3e50",
        },
    },
    light: {
        container: {
            backgroundColor: "#dcdde1",
        },
        buttonAdd: {
            backgroundColor: "#95a5a6",
        },
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#34495e"
    },
    header: {
        justifyContent: "flex-start",
        marginTop: 60,
        marginBottom: 60,
        height: 50,
        display: "flex"
    },
    headerTxt: {
        color: "#fff",
        fontSize: 30,
        margin: 10,
        marginLeft: 20,
        fontStyle: "italic",
        fontWeight: "bold",
        position: "absolute"
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    buttonAdd: {
        color: "#fff",
        backgroundColor: "#2c3e50",
        fontSize: 20,
        width: "50%",
        height: 40,
        borderRadius: 10,
    },
});

export { styles, Colors };