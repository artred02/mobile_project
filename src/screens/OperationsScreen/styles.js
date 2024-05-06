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
        title:{
            color:'white',
        },
        btnAddOpe:{
            backgroundColor:'#2c3e50',
        },
    },
    light: {
        container: {
            backgroundColor: "#dcdde1",
        },
        accountCard:{
            backgroundColor:'#95a5a6',
        },
        title:{
            color:'black',
        },
        btnAddOpe:{
            backgroundColor:'#95a5a6',
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
        borderRadius:20,
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
    },
    title:{
        fontSize:20,
    },
    btnAddOpe:{
        alignItems: 'center',
        justifyContent: "center",
        height:50,
        width:300,
    },
    input_double:{
        height: 48,
        borderRadius: 5,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        marginLeft:10,
    },
    input_double_view:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:300,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        width: 150,
    }
});

export { styles, Colors, pickerSelectStyles };