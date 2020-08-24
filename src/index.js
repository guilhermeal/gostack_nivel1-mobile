import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="#715999"
    />
    <View style={styles.container}>
      <Text style={styles.textTitle}>Go Rocket!</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
})