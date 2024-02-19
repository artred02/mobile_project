import React from 'react';
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Modale (modalVisible, setModalVisible, modalContent) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Pressable
                style={styles.centeredView}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <FontAwesomeIcon icon={faTimes} size={30} onPress={() => setModalVisible(!modalVisible)} style={{color: '#fff', position: 'absolute', top: 0, right: 0}} />
            </Pressable>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {modalContent}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#2c3e50',
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
  });