import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus, faUser, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function NavBottomBar({navigation}) {

  const home = () => {
    navigation.navigate('Home')
  }

  const chatbot = () => {
    navigation.navigate('Chatbot')
  }
  

  return (
    <View style={styles.background}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={home} >
            <FontAwesomeIcon icon={faHome} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlus} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faUser} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={chatbot} >
            <FontAwesomeIcon icon={faMessage} size={30} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        height:80,
        backgroundColor:'#2ecc71',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    icon:{

    }
})