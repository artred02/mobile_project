import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#34495e",
    },

    containerView: {
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

    accountCard:{
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

    buttonIcon:{
        color:'#2ecc71',
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