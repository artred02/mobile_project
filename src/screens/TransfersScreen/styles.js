import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34495e",
    },
    userCard:{
        backgroundColor:'#2980b9',
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