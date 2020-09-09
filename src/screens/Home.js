import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';


const Home = ({navigation}) => {
  // console.log(props.route.params.isSubmitted);
  console.log(navigation.navigate('HomeBody'));
  // console.log(props.navigation.navigate('ConversationScreen"'));

  return (
    <View style={styles.container}>
      <HomeHeader />
      
      <HomeBody isNewItem={false} />
      
    </View>
  )
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    // height: '100%'
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});