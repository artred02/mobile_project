import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34495e",
    },
    containerView: {
        width: '100%',
    },
    containerInfo: {
        margin: 20,
    },
    textTitle: {
        color: 'white',
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    depotAccount: {
        color: 'white',
        fontSize: 15,
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',

    },
    infoAccount: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
    },
    ibanInfo: {
        margin: 20,
    },
    fontAwesomeIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 10,
    },
    buttonShare: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%', 
        height: 50, 
        marginLeft: '25%', 
    },
    pdfIcon: {
        position: 'absolute',
        right: 0,
        marginRight:25,
    },

});