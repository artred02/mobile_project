import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle} >Chat</Text>
      </View>
      <View style={styles.content}>
        <Text>Chat Screen</Text>
      </View>
    </View>
  )
}