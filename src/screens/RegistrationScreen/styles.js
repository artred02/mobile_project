import { Platform, StyleSheet } from 'react-native';

const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
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
})

export { styles, Colors };