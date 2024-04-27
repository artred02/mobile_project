import {StyleSheet, useColorScheme} from 'react-native';

const styles = StyleSheet.create({
 dark: {
    text: {
        color: 'blue',
    },
   backgroundColor: '#1A1A1A',
   color: '#FAFAFA',
 },
 light: {
   backgroundColor: '#FAFAFA',
   color: '#1A1A1A',
 },
});

export default styles;