import React from 'react';
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Modale (modalVisible, setModalVisible, modalContent,theme) {
    const colors = Colors(theme);
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView,colors.modalView]}>
                    <Pressable
                    style={styles.fontAwesomeIcon}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <FontAwesomeIcon icon={faTimes} size={30} style={styles.fontAwesomeIcon} />
                    </Pressable>
                    {modalContent}
                </View>
            </View>
        </Modal>
    )
}
const Colors = (theme) => {
    if(theme === 'dark'){
        return styles.dark;
    }
    return styles.light;
}
const styles = StyleSheet.create({
    dark: {
        modalView: {
            backgroundColor: '#34495e',
        },
    },
    light: {
        modalView: {
            backgroundColor: '#95a5a6',
 
        },
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    fontAwesomeIcon: {
        color: 'white',
        alignSelf: 'flex-end',
    },
  });