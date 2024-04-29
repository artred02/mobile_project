import { Platform, StyleSheet } from 'react-native';

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
        marginLeft: 10,
        marginRight: 10,
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
        overflow: 'hidden',
        borderRadius: 15,
    },
    pointPassword: {
        backgroundColor: '#2c3e50',
        height: (Platform.OS === 'ios') ? 50 : 40,
        width: (Platform.OS === 'ios') ? 50 : 40,
        color: 'white',
        textAlign: 'center',
        lineHeight: 55,
        fontSize: 55,
        borderRadius: 25,
        overflow: 'hidden',
    },
    viewPointPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    passwordTitle: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5,
    },
    buttonReset: {
        backgroundColor: '#e74c3c',
        height: (Platform.OS === 'ios') ? 50 : 40,
        width: (Platform.OS === 'ios') ? 50 : 40,
        marginLeft: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: 'center',
        
    },    
})