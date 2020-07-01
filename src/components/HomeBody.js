import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

  // const [isApp, setIsApp] = useState(undefined);
  // console.log(getState.state.dbSet);

  // call only on mount and unmount using empty array arg []
  useEffect(() => {
    getData();
  }, []);

  console.log(props);

  const getData = async () => {
    // get db instances from from state
    // is there a better way to store this rather than saving it to state?
    // for example one client object has a lot of layers, are they all necessary?
    // const mongodb = getState.state.dbSet.mongo;
    // const app = props.appInstance;
    const app = await getState.state.dbSet.app;
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
        initialLoadedGoods()
      })
      .catch(err => console.error(`Failed to find documents: ${err}`));

  }

  const initialLoadedGoods = () => {
    let initData = getState.state.homeQueries.initial_Goods;

    console.log('/----------------------/')
    return (initData.map(obj => {
      console.log(obj.title);
    }))

    // return (initData.map(obj => {
    //   return (
    //     <View style={styles.cardContainer}>

    //       <Text>
    //         {obj.title}
    //       </Text>

    //     </View>
    //   )
    // })
    // )
  }

    return (
      <View style={styles.homeBody2}>

      </View>
    )
  // if (getState.state.dbSet.app === undefined) {
  //   return (
  //     // ideally this page will contain two themes,
  //     //   1. render random items from the database
  //     //   2. on user search, query the db to filter on items
  //     //      equal or related to the search term

  //     // Content to be rendered:
  //     //     1. random list of items when user first opens app
  //     //     2. items queried from the DB when user inputs string into search bar

  //     //     Note: a) simply display cards for each item maybe 2 or 3 to a row
  //     //     b) render a new page showing all pictures for that item and description
  //     //     c) handle interaction logic between people

  //     //     These should be the general concepts/next steps

  //     <View style={styles.homeBody}>
  //       <Text>


  //       </Text>
  //     </View>
  //   )


  // } else {
  //   // getData();

  //   return (

  //     <View style={styles.homeBody2}>
  //       <Text>
  //         Initial loaded items:
  //       </Text>

  //       <View>
  //         {
  //           // initialLoadedGoods
  //         }
  //       </View>

  //     </View>
  //   )
  // }

}

export default HomeBody;

const styles = StyleSheet.create({
  homeBody: {
    flex: 1,
    padding: 10,
    backgroundColor: 'orange',
    width: '100%'
  },
  homeBody2: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue',
    width: '100%'

  },
  cardContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'ghostwhite'
  },
  initCards: {
    height: 120,
    width: 120,
    backgroundColor: 'yellow'
  }
})