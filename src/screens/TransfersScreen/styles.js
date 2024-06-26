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
        benefTitle: {
            color: 'white',
        },
        textStyle: {
            color: 'white',
        },
        btnAddBalance: {
            backgroundColor: '#2c3e50',
        },
        btnAccountSelect: {
            backgroundColor: '#2c3e50',
        },
        benefTitle: {
            color: 'white',
        },
        title: {
            color: 'white',
        },
        textStyle: {
            color: 'white',
        },
        montant:{
            color: 'red',
        },
    },
    light: {
        container: {
            backgroundColor: "#ecf0f1",
        },
        textStyle: {
            backgroundColor: '#34495e',
        },
        btnAddBalance: {
            backgroundColor: '#2ecc71',
        },
        btnAccountSelect: {
            backgroundColor: '#2ecc71',
        },
        benefTitle: {
            color: 'black',
        },
        title: {
            color: 'black',
        },
        textStyle: {
            color: 'black',
        },
        montant:{
            color: 'red',
        },
    },
    container: {
        flex: 1,
    },
    benefCard:{
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
    buttonIcon:{
        color:'#2ecc71',
        margin:15,
    },
    input_double_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_double: {
        height: 48,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 10,
        paddingLeft: 10,
        width: 115,
    },
    input: {
        height: 48,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 10,
        paddingLeft: 10,
        width: 250,
    },
    btnAddBalance: {
        borderRadius: 10,
        width: 250,
        height: 50,
        margin: 10,
        alignItems: 'center',
    },
    btnAccountSelect: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
    },
    separator:{
        height:1,
        backgroundColor:'black',
        marginHorizontal: 16,
    },
    title: {
        padding: 10,
        fontSize: 24,
    },
    containerViewModale: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerViewHide: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },
    montant:{
        fontSize:30,
        marginLeft:30,
        borderBottomWidth:1,
        borderColor:'red',
        width:90,
        textAlign:'center',
    },
});

export { styles, Colors };