import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SplashScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.SplashContainer}>

        <Text style={styles.SplashText}>
          Trade It
        </Text>

        <Spinner
          visible={true}
          textContent={''}
          textStyle={styles.spinnerTextStyle}
        />

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
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 110
  }
})