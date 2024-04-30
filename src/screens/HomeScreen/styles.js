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
        accountCard:{
            backgroundColor:'#2c3e50',
        },
        buttonIcon:{
            color:'#2ecc71',
            
        },
    },
    light: {
        container: {
            backgroundColor: "#dcdde1",
        },
        accountCard:{
            backgroundColor:'#95a5a6',
        },
        buttonIcon:{
            color:'#fff',
        },
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },

    containerView: {
        width: '100%',
    },

    accountCard:{
        height:75,
        margin:10,
        padding:10,
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection:'row',
    },

    buttonIcon:{
        margin:15,
    },

    separator:{
        height:1,
        backgroundColor:'black',
        marginHorizontal: 16,
    },

    title: {
        color: 'white',
    },

    rightAction: {
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignContent: 'flex-end',
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },

    actionText: {
        color: 'white',
        fontWeight: '600',
        padding: 20,
    },
})

export { styles, Colors };