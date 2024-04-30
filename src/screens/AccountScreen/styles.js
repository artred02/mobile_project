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
            backgroundColor: "#f5f5f5",
        },
    },
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
        marginTop:5,
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
        marginLeft:20,
        marginTop:10,
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
    balance : {
        color:'#fff',
        fontSize:20,
        marginTop:10,
        position:'absolute',
        right:20,
        
    },
    iban : {
        color:'#fff',
        fontSize:15,
        marginLeft:20,
        marginTop:10,
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
    btnDelete:{
        width:200,
        height:50,
        backgroundColor:'#e74c3c',
        alignSelf:'center',
        marginTop:20,
    },
    card : {
        backgroundColor: '#2c3e50',
        height: 200,
        borderRadius: 30,
        margin: 20,
        marginTop:0,
        shadowColor: "black",
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    separation:{
        color:'#fff',
        marginLeft:20,
    },
    lastOperations:{
        borderTopColor:'#fff',
        borderTopWidth:1,
        margin:20,
    },
    lastOperationsTitle:{
        color:'#fff',
        fontSize:20,
        marginTop:10,
        fontStyle:'italic',
    },
    lastOperationsText:{
        color:'#fff',
        fontSize:15,
        marginTop:10,
    },
    ibanPdf:{
        backgroundColor:'#2c3e50',
        width:'50%',
        height:'20%',
        margin:20,
        marginTop:10,
        padding:20,
        borderRadius:30,
        shadowColor: "black",
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    ibanPdfText:{
        color:'#fff',
        fontSize:20,
        marginTop:10,
    },
    fontAwesomeIcon:{
        color:'#fff',
    },
    TitleSection:{
        color:'#fff',
        fontSize:20,
        marginLeft:30,
        fontWeight:'bold',
    },
});

export { styles, Colors };