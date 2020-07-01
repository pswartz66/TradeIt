import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from '../redux/actions/index';
import HomeBody from '../components/HomeBody';

const Home = () => {

  // test logger to log out state object in its entirety
  const stateObj = useSelector(state => ({
    state
  }));

  
  // console.log(stateObj.state.dbSet);
  // console.log(Stitch.defaultAppClient);

  useEffect(() => {
    setup();

    // console.log(stateObj.state.dbSet.app);
    // console.log(stateObj.state.dbSet.mongoDB);
  }, []);


  // standard redux dispatch
  const dispatch = useDispatch();

  // logic for initializing Stitch Client, DB, and App.
  // useDispatch to updated redux state
  // now in any other component/screen you can useSelector to get the 
  // db instance and update the DB.
  let mongoDB = undefined;
  let app = undefined;

  const setup = () => {
    if (Stitch.hasAppClient("tradeitrealm-gdxsi")) {
      const client = Stitch.getAppClient("tradeitrealm-gdxsi");
      mongoDB = client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );

      // if (stateObj.state.dbSet.db === undefined) {
        dispatch(set_Client(client));
        dispatch(set_Db(mongoDB.db("TradeItDB")));
        app = Stitch.defaultAppClient;
        // console.log(app);
        dispatch(set_App(Stitch.defaultAppClient));
        dispatch(set_Mongo(mongoDB));

        // console.log(stateObj.state.dbSet.mongoDB);
      // }

    } else {

      Stitch.initializeDefaultAppClient("tradeitrealm-gdxsi").then(client => {
        // const client = stateObj.state.dbSet.client;

        // Define MongoDB Service
        mongoDB = client.getServiceClient(
          RemoteMongoClient.factory,
          "mongodb-atlas"
        );
        // console.log(mongoDB);
        dispatch(set_Client(client));
        dispatch(set_Db(mongoDB.db("TradeItDB")));
        app = Stitch.defaultAppClient;
        dispatch(set_App(Stitch.defaultAppClient));
        dispatch(set_Mongo(mongoDB));

      });
    }
  }

  return (
    <View style={styles.container}>
      <HomeHeader />

      <HomeBody appInstance={app} mongoInstance={mongoDB} />

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