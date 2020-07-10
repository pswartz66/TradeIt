import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.SplashContainer}>

        <Text style={styles.SplashText}>
          Trade It
        </Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  SplashContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0454ab'
  },
  SplashText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})