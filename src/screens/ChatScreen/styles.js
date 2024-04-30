import { StyleSheet } from 'react-native';


const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#34495e",
    },
    header:{
        justifyContent:'flex-end',
        height:100,
    },
    headerTitle:{
        color:'#fff',
        fontSize:30,
        fontFamily: 'knewave',
    },
});

export { styles, Colors };