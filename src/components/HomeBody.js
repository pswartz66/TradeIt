import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { get_Initial_Goods } from '../redux/actions';

const HomeBody = (props) => {

  const [isLoaded, setIsLoaded] = useState(true);

  // console.log(props);

  // test logger to log out state object in its entirety
  const getState = useSelector(state => ({
    state
  }));

  // standard redux dispatch
  const dispatch = useDispatch();

  // console.log(appFromRedux);

  // let initialGoods;
  // initialGoods = getState.state.homeQueries.initial_Goods

  // const loadAppFromDB = async () => {
  //   return new Promise((resolve, reject) => {
  //     let appFromState = getState.state.dbSet.app;

  //     if (appFromState !== undefined) {

  //       resolve(getData());

  //     } else {
  //       reject('app was NOT set');
  //     }

  //   })
  // }

  // call only on mount and unmount using empty array arg []
  // useEffect(() => {

  //   async function renderContent() {
  //     // const data = await getData();
  //     const data = await loadAppFromDB();

  //     // console.log(data);

  //     if (data !== null) {
  //       getData();
  //     }
  //   }

  //   renderContent();

  //   return (console.log("useeffect has run"));

  // }, []);

  let appFromRedux = getState.state.dbSet.app;


  // currently loads all data from the database where an image is present
  const getData = async () => {

    // console.log('this is the app from redux state');

    const mongodb = await appFromRedux.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
    const goodsCollection = mongodb.db("TradeItDB").collection("Goods");
    const query = { "images": { $exists: true, $ne: [] } };

    goodsCollection.find(query).toArray()
      .then(data => {

        // save initialGoods to state
        dispatch(get_Initial_Goods(data));
        console.log(data);
        // console.log(getState.state);


        // initialLoadedGoods();

      })
      .catch(err => console.error(`Failed to find documents: ${err}`));
  }

  const refreshItemsFromDB = () => {

    getData();

    console.log('refreshButton was clicked');
  }

  // const initialLoadedGoods = () => {

  //   let initData = getState.state.homeQueries.initial_Goods;
  //   // console.log(initData);

  //   console.log('/----------------------/')
  //   return (initData.map(obj => {
  //     console.log(obj.title);

  //   }))

  // }

  if (isLoaded) {
    return (

      <View style={styles.homeBody}>
        <View style={styles.isLoadingContainer}>
          <Text style={{fontSize: 16}}>
            Oops... no items were found.
          </Text>
          <TouchableOpacity style={styles.refreshBtn} onPress={refreshItemsFromDB}>

              <Text style={{fontSize: 18, color: 'white'}}>
                Refresh
              </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  } else {
    return (

      <View style={styles.homeBody}>
        <View style={styles.goodsContainers}>

        </View>
      </View>
    )
  }



}

export default HomeBody;

const styles = StyleSheet.create({
  homeBody: {
    flex: 1,
    padding: 10,
    backgroundColor: '#d5e4ed',
    width: '100%'

  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goodsContainers: {
    paddingTop: 20,
    height: 110,
    width: 110,
    backgroundColor: 'ghostwhite',
    borderRadius: 6
  },
  refreshBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 10,
    borderRadius: 4,
    // height: 40,
    width: 180,
    backgroundColor: '#0454ab'
  }
})