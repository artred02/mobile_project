import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        fontSize: 20,
        width: "50%",
    },
});