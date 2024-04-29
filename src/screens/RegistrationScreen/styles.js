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
        margin:10,
        marginTop: 40,
    },
    nameapp:{
        color: '#fff',
        fontSize: 30,
        fontFamily: 'knewave',
        textAlign: 'center',
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
    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 5,
        marginBottom: 5,
        
    },
    buttonNumber: {
        backgroundColor: '#2c3e50',
        height: 60,
        width: 60,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        lineHeight: 60,
    },
    passwordmiddle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 165,
        marginRight: 165,
        marginTop: 5,
    },
    pointPassword: {
        backgroundColor: '#2c3e50',
        height: 60,
        width: 60,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        lineHeight: 60,
        borderRadius: 30,
        lineHeight: -60,
        fontSize: 55,
    },
    viewPointPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    
})