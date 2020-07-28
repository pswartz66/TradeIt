import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';


const Home = (props) => {
  // console.log(props.route.params.isSubmitted);

  // if (props.route.params.isSubmitted == undefined) {
  //   console.log('its undefined we GET IT!!!!!!');
  // }
  return (
    <View style={styles.container}>
      <HomeHeader />
        {/* <HomeBody isNewItem={props.route.params.isSubmitted} /> */}
        <HomeBody isNewItem={false} />
      
    </View>
  )
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});