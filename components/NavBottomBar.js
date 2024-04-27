import {Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus,faRightLeft, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function NavBottomBar({navigation}) {

  const home = () => {
    navigation.navigate('Home')
  }
  
  const addAccount = () => {
    navigation.navigate('AddAccount')
  }

  const chatbot = () => {
    navigation.navigate('Chatbot')
  }

  const transfers = () => {
    navigation.navigate('Transfers')
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
          <View>
            <TouchableOpacity onPress={home} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faHome} style={styles.icon} size={25} />
              <Text style={{color:'#fff'}}>Home</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={addAccount} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faPlus} style={styles.icon} size={25} />
              <Text style={{color:'#fff'}}>Add Account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={transfers}style={styles.icon_txt} >
              <FontAwesomeIcon icon={faRightLeft} style={styles.icon} size={25} />
              <Text style={{color:'#fff'}}>Transfers</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={chatbot} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faMessage} style={styles.icon} size={25} />
              <Text style={{color:'#fff'}}>Chatbot</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: 0,
      justifyContent: 'flex-end',
      backgroundColor:'#34495e',
    },
    
    icon:{
      color:'#fff',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
    },

    background:{
      width:'100%',
      backgroundColor:'#2c3e50',
      height:85,
      alignSelf:'center',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    icon_txt:{
      marginBottom:20,}
})