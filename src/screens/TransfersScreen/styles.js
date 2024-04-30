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
            backgroundColor: "#34495e",
        },
    },
    light: {
        container: {
            backgroundColor: "#ecf0f1",
        },
    },
    container: {
        flex: 1,
    },
    userCard:{
        backgroundColor:'#2c3e50',
        height:75,
        margin:10,
        padding:10,
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection:'row',
    },
    userTitle: {
        color: 'white',
    },
    buttonIcon:{
        color:'#2ecc71',
        margin:15,
    },
    containerView: {
        width: '100%',
    },
});

export { styles, Colors };