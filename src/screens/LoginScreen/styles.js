import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#34495e",
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#2ecc71',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#fff'
    },
    footerLink: {
        color: "#2ecc71",
        fontWeight: "bold",
        fontSize: 16
    },
    error: {
        color: 'red',
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        textAlign: 'center'
    },
    citationView:{
        flex: 1,
        marginTop: 100,
        justifyContent: 'flex-end',

    },
    citationText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    }
})