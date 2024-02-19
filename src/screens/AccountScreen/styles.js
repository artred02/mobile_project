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
        display:'flex'
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
    logoutTouchable: {
        marginLeft:'auto',
        
    },
    parametreTouchable:{
        position:'absolute',
        right:0,
        marginRight: 40
    },
    buttonIcon:{
        color:'#2ecc71',
        margin:15,
    },
    viewRow:{
        flexDirection:'row',
    },
    penTouchable:{
        paddingLeft:20,
    },
    buttonIconPen:{
        color:'#2ecc71',
    },
    scrollView: {
        width: '100%',
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

    accountsTitle:{
        color:'#fff',
        fontSize:20,
        margin:10,
        marginTop:50,
        marginLeft:20,
    },
    account:{
        display:'flex',
        margin:10,
        padding:10,
        borderRadius:10,
    },
    accountText:{
        color:'#fff',
        fontSize:20,
        margin:10,
        marginLeft:20,
    },
    btnAddBalance:{
        width:200,
        height:50,
    },
    textStyle:{
        color:'#fff',
        fontSize:20,
    },
    modalText:{
        color:'#fff',
        fontSize:20,
        margin:10,
    },
});