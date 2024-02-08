import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#34495e",

    },
    logo: {
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30,
        marginTop: 100
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
        justifyContent: 'flex-end',
        marginBottom:30,
    },
    citationText:{
        color: '#fff',
        fontSize: 12,
        fontWeight: "bold",
        textAlign: 'justify',
        margin:15,
        
    }
})