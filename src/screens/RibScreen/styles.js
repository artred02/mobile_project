import { StyleSheet } from 'react-native';


const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
    dark:{
        container: {
            backgroundColor: "#34495e",
        },
        textTitle: {
            color: '#fff',
        },
        depotAccount: {
            color: '#fff',
        },
        infoAccount: {
            color: '#fff',
        },
        fontAwesomeIcon: {
            color: '#fff',
        },

    
    },
    light:{
        container: {
            backgroundColor: "#dcdde1",
        },
        textTitle: {
            color: '#000',
        },
        depotAccount: {
            color: '#000',
        },
        infoAccount: {
            color: '#000',
        },
        fontAwesomeIcon: {
            color: '#000',
        },
    
    },
    container: {
        flex: 1,
    },
    containerView: {
        width: '100%',
    },
    containerInfo: {
        margin: 20,
    },
    textTitle: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    depotAccount: {
        fontSize: 15,
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',

    },
    infoAccount: {
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

export { styles, Colors };