import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from "react-redux";
// import { AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

const HomeBody = () => {

  // test logger to log out state object in its entirety
  const getState = useSelector(state => ({
    state
  }));

  console.log(getState);
  // useEffect(() => {
  //   getData();
  // })
  
  const getData = () => {
    // get db instances from from state
    // is there a better way to store this rather than saving it to state?
    // for example one client object has a lot of layers, are they all necessary?
    const mongodb = getState.state.dbSet.mongo;
    // const client = getState.state.dbSet.client;
    const goodsCollection = mongodb.db("TradeItDB").collection("Goods");
    const options = { "$limit": 20 };
    
    let result = [];
      goodsCollection.find({}).then(data => {
        result.push(data)
        console.log(data);
      })
      .catch(err => console.error(`Failed to find documents: ${err}`));

      return result;
  }
  

  return (
    // ideally this page will contain two themes,
    //   1. render random items from the database
    //   2. on user search, query the db to filter on items
    //      equal or related to the search term

    // Content to be rendered:
    //     1. random list of items when user first opens app
    //     2. items queried from the DB when user inputs string into search bar

    //     Note: a) simply display cards for each item maybe 2 or 3 to a row
    //     b) render a new page showing all pictures for that item and description
    //     c) handle interaction logic between people

    //     These should be the general concepts/next steps
    <View style={styles.homeBody}>
      <Text>
        
      </Text>
    </View>
  )
}

export default HomeBody;

const styles = StyleSheet.create({
  homeBody: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'orange'
  }
})