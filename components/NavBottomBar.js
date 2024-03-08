import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus, faUser, faMessage } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <View style={styles.container}>
      <View style={styles.background}>
          <View>
            <TouchableOpacity onPress={home} >
              <FontAwesomeIcon icon={faHome} style={styles.icon} size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={addAccount} >
              <FontAwesomeIcon icon={faPlus} style={styles.icon} size={30} />
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faUser} style={styles.icon} size={30} />
            </TouchableOpacity>
          </View> */}
          <View>
            <TouchableOpacity onPress={chatbot} >
              <FontAwesomeIcon icon={faMessage} style={styles.icon} size={30} />
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
      color:'#2ecc71',
    },

    background:{
      width:'95%',
      backgroundColor:'#2c3e50',
      marginBottom:20,
      height:80,
      alignSelf:'center',
      borderRadius:25,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
})