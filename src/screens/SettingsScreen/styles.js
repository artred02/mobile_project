import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#34495e",

    },
    header:{
        justifyContent:'flex-start',
        marginTop:60,
        height:50,
        display:'flex',
        marginBottom:30
    },
    headerTxt:{
        color:'#fff',
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
        backgroundColor:'#2c3e50',
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
        marginBottom: 0,
        marginLeft:20,
        color:'#fff'
    },
    bodyTxt:{
        fontSize: 20,
        width:'100%',
        color:'#fff',
        marginLeft:10,
        marginTop:1,
      },
    Icon:{
        color:'#fff',
    },
    navbar:{
        backgroundColor:'#34495e',
    },
    
    
})