import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from '../redux/actions/index';

const Home = () => {

  // test logger to log out state object in its entirety
  const stateObj = useSelector(state => ({
    state
  }));

  console.log(stateObj.state.dbSet);
  // console.log(Stitch.defaultAppClient);


  // standard redux dispatch
  const dispatch = useDispatch();


  // logic for initializing Stitch Client, DB, and App.
  // useDispatch to updated redux state
  // now in any other component/screen you can useSelector to get the 
  // db instance and update the DB.
  if (Stitch.hasAppClient("tradeitrealm-gdxsi")) {
    const client = Stitch.getAppClient("tradeitrealm-gdxsi");
    const mongoDB = client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );

    if (stateObj.state.dbSet.db === undefined) {
      // dispatch(set_Mongo(mongoDB));
      dispatch(set_Db(mongoDB.db("TradeItDB")));
      dispatch(set_App(Stitch.defaultAppClient));
    }
    
  } else {

    Stitch.initializeDefaultAppClient("tradeitrealm-gdxsi").then(client => {
      // const client = stateObj.state.dbSet.client;

      // Define MongoDB Service
      const mongoDB = client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
    });
  }


    return (
      <View style={styles.container}>
        <HomeHeader />

      </View>
    )
  };

  export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });