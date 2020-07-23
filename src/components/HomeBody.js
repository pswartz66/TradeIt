import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { get_Initial_Goods } from '../redux/actions';
import { ListItem, Card } from 'react-native-elements';

const HomeBody = (props) => {

  const [isLoaded, setIsLoaded] = useState(true);
  const [pulledData, setPulledData] = useState([]);

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
        // dispatch(get_Initial_Goods(data));
        setPulledData(data);

        console.log("this is the pulledData state: \n");
        console.log(pulledData);
        // console.log(getState.state);


        // initialLoadedGoods();
        setIsLoaded(false);

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
        <View style={styles.goodsContainer}>
        
          <FlatList
            data={pulledData}
            columnWrapperStyle={styles.flatListItems}
            numColumns={2}
            vertical={true}
            renderItem={({item}) => {
              
              return (
                <TouchableOpacity key={item._id} style={styles.itemsTouchableContent}>
                  <Text style={{ fontSize: 16, padding: 2 }}>{item.title}</Text>
                <ListItem
                  key={item._id}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                  containerStyle={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#71a0b0',
                    // borderRadius: 10,
                    borderBottomEndRadius: 10,
                    borderBottomLeftRadius: 10,
                    // margin: 2,
                    width: 160
                  }}
                  leftAvatar={{
                    rounded: true,
                    size: 120,
                    source: { uri: item.images[0] }
                  }}
                />
                </TouchableOpacity>
              )
            }}
          />

        </View>
      </View>
    )
  }

}

export default HomeBody;

const styles = StyleSheet.create({
  homeBody: {
    flex: 1,
    // flexDirection: "row",
    padding: 10,
    backgroundColor: '#d5e4ed',
    // width: '100%',
    // height: "100%"

  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemsTouchableContent: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#beccd1',
    // padding: 10,
    // width: "100%",
    borderRadius: 10,
    margin: 10
    // height: "100%",

  },
  goodsContainer: {
    // flex: 1,
    // flexDirection: "row",
    // padding: 10,
    // height: "100%",
    // width: "100%",
    // backgroundColor: 'blue',
    // borderRadius: 6
  },
  flatListItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: 'purple',
    width: "100%",
    // height: "100%",
    margin: 2,
    // padding: 10
    // borderRadius: 10
  },
  listItems: {
    backgroundColor: 'yellow'

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