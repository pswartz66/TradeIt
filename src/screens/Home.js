import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from '../redux/actions/index';
import HomeBody from '../components/HomeBody';


const Home = (props) => {
  // console.log(props.initialProps);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeBody />
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  }
});