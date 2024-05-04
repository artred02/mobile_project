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
        information:{
            backgroundColor:'#2c3e50',
        },
        headerTxt:{
            color:'#fff',
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
        information:{
            backgroundColor:'#95a5a6',
        },
        headerTxt:{
            color:'black',
        },
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header:{
        justifyContent:'flex-start',
        marginTop:60,
        height:50,
        display:'flex',
        marginBottom:30
    },
    headerTxt:{
        fontSize:30,
        margin:10,
        marginLeft:20,
        fontStyle:'italic',
        fontWeight:"bold", 
        position:'absolute'

    },
    scrollView: {
        width: '100%',
    },
    information:{
        borderRadius: 10,
        margin: 10,
        padding: 10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:20,
        marginTop:5,
        color:'#fff'
    },

    bodyText:{
        fontSize: 15,
        marginTop:5,
        marginRight:50,
        color:'#fff'
    },

    Icon:{
        color:'#fff',
        position:'absolute',
    },
    navbar:{
        backgroundColor:'#34495e',
    },
    buttonIcon:{
        color:'#fff',
        position:'absolute',
        right:20,
        top:10,
        marginTop:5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#fff'
    },
    input:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff',
        borderRadius:10,
        width:'100%'
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
    textbutton:{
        color:'#fff',
        fontSize:20
    },
    confirmmodalText:{
        marginBottom: 10,
        textAlign: "center",
        color: '#fff',
        paddingTop:10,

    },
});

export { styles, Colors };