import { StyleSheet } from 'react-native';


const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: "#2c3e50",
        },
        footerText: {
            color: '#fff',
        },
        nameapp:{
            color: '#fff',
        },
    },
    light: {
        container: {
            backgroundColor: "#dcdde1",
        },
        footerText: {
            color: '#000',
        },
        nameapp:{
            color: '#000',
        },
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        height: 120,
        width: 90,
        alignSelf: "center",
        margin:10,
        marginTop: 100
    },
    nameapp:{
        fontSize: 30,
        fontFamily: 'eagleLake',
        textAlign: 'center',
        marginBottom: 50,
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
        color: 'white',
        fontFamily: 'eagleLake',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "justify",
        paddingTop: 50
    },
    inputReset: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff',
        borderRadius:10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#fff'
    },
    btnAddBalance : {
        backgroundColor: '#34495e',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        height: 50,
        margin: 10,
        alignItems: 'center',
    },
    centeredView : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export { styles, Colors };