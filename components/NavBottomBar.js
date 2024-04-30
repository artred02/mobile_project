import {Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus,faRightLeft, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function NavBottomBar({navigation, theme}) {

  const colors = Colors(theme);

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
    <View style={[styles.container, colors.container]}>
      <View style={[styles.background, colors.background]}>
          <View>
            <TouchableOpacity onPress={home} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faHome} style={[styles.icon, colors.icon]} size={25} />
              <Text style={[colors.textColor]}>Home</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={addAccount} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faPlus} style={[styles.icon, colors.icon]} size={25} />
              <Text style={[colors.textColor]}>Add Account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={transfers}style={styles.icon_txt} >
              <FontAwesomeIcon icon={faRightLeft} style={[styles.icon, colors.icon]} size={25} />
              <Text style={[colors.textColor]}>Transfers</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={chatbot} style={styles.icon_txt}>
              <FontAwesomeIcon icon={faMessage} style={[styles.icon, colors.icon]} size={25} />
              <Text style={[colors.textColor]}>Chatbot</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
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
    background: {
      backgroundColor:'#2c3e50',
    },
    icon:{
      color:'#ffffff',
    },
    textColor:{
      color:'#ffffff',
    },
  },
  light: {
    background: {
      backgroundColor:'#ffffff',
    },
    icon:{
      color:'#000000',
    },
    textColor:{
      color:'#000000',
    },
  },
  container: {
    height: 0,
    justifyContent: 'flex-end',
  },
  
  icon:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },

  background:{
    width:'100%',
    height:85,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  icon_txt:{
    marginBottom:20,
  },
})