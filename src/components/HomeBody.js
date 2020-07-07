import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { save_Initial_Goods } from '../redux/actions';

const HomeBody = (props) => {

  // test logger to log out state object in its entirety
  const getState = useSelector(state => ({
    state
  }));

  // standard redux dispatch
  const dispatch = useDispatch();

  let initialGoods;

  // call only on mount and unmount using empty array arg []
  useEffect(() => {

    initialGoods = getState.state.homeQueries.initial_Goods

    getData();

  }, [initialGoods]);



  const getData = () => {

    // const app = getState.state.dbSet.app;
    let app = props.appInstance;

    // console.log(app);
    const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
    // const mongodb = props.mongoInstance;

    const goodsCollection = mongodb.db("TradeItDB").collection("Goods");
    const query = { "images": { $exists: true, $ne: [] } };

    goodsCollection.find(query).toArray()
      .then(data => {

        // save initialGoods to state
        dispatch(save_Initial_Goods(data));
        // console.log(data);

        initialLoadedGoods();

      })
      .catch(err => console.error(`Failed to find documents: ${err}`));


  }


  const initialLoadedGoods = () => {

    let initData = getState.state.homeQueries.initial_Goods;
    // console.log(initData);

    console.log('/----------------------/')
    return (initData.map(obj => {
      console.log(obj.title);

    }))

  }

  return (
    <View style={styles.homeBody2}>
      <View style={styles.goodsContainers}>

      </View>
    </View>
  )


}

export default HomeBody;

const styles = StyleSheet.create({
  homeBody2: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue',
    width: '100%'

  },
  goodsContainers: {
    paddingTop: 20,
    height: 110,
    width: 110,
    backgroundColor: 'ghostwhite',
    borderRadius: 6
  }
})