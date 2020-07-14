import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from '../redux/actions/index';
import HomeBody from '../components/HomeBody';


export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myClient: undefined,
      myDB: undefined,
      myApp: undefined
    }
  }


  componentDidMount() {
    // let mongoDB;
  
    // standard redux dispatch
    // const dispatch = useDispatch();

    // if (Stitch.hasAppClient("tradeitrealm-gdxsi")) {

    //   console.log('app already has client');

    //   let existingClient;

    //   existingClient = Stitch.getAppClient("tradeitrealm-gdxsi");

    //   this.setState({ myClient: existingClient });

    //   // Define MongoDB Service    
    //   mongoDB = existingClient.getServiceClient(
    //     RemoteMongoClient.factory,
    //     "mongodb-atlas"
    //   );

    //   this.setState({
    //     myDB: mongoDB.db("TradeItDB"),
    //     myApp: Stitch.defaultAppClient,
    //     isAppUpdated: true
    //   });

    // } else {

      // Stitch.initializeDefaultAppClient("tradeitrealm-gdxsi").then(client => {
      //   this.setState({ client });
      //   // dispatch(set_Client(client));

      //   // console.log(this.state.client);
      //   // Define MongoDB Service    
      //   mongoDB = client.getServiceClient(
      //     RemoteMongoClient.factory,
      //     "mongodb-atlas"
      //   );

      //     this.setState({
      //       myDB: mongoDB.db("TradeItDB"),
      //       myApp: Stitch.defaultAppClient
      //     });
      //   // dispatch(set_Db(mongoDB.db("TradeItDB")));
      //   // dispatch(set_App(app));
        

      // }).catch(error => {
      //   console.log('handled error:   ' + error)
      // });

  }

  // componentDidUpdate() {
  //   console.log(this.state.myApp);
  // }

  // componentWillUnmount() {
  //   this._isMounted = false;
  //   // console.log(this.state.myApp);
  // }

  // componentDidUpdate() {
    // console.log("app Object: from ComponentDidUpdate" + "\n" + "--------------" + "\n");
    // console.log(this.state.myApp);

    // this.setState({ isAppUpdated: true });
    // return true;
  // }


  // logic for initializing Stitch Client, DB, and App.
  // useDispatch to updated redux state
  // now in any other component/screen you can useSelector to get the 
  // db instance and update the DB.

  // let mongoDB = undefined;
  // let app = undefined;

  // const setup = () => {

  //   if (Stitch.hasAppClient("tradeitrealm-gdxsi")) {
  //     const client = Stitch.getAppClient("tradeitrealm-gdxsi");
  //     dispatch(set_Client(client));

  //     const mongoDB = client.getServiceClient(
  //       RemoteMongoClient.factory,
  //       "mongodb-atlas"
  //     );

  //     dispatch(set_Db(mongoDB.db("TradeItDB")));

  //     const app = Stitch.defaultAppClient;
  //     dispatch(set_App(app));
  //     // dispatch(set_Mongo(mongoDB));


  //   } else {


  //     Stitch.initializeDefaultAppClient("tradeitrealm-gdxsi").then(client => {
  //       dispatch(set_Client(client));

  //       // Define MongoDB Service
  //       const mongoDB = client.getServiceClient(
  //         RemoteMongoClient.factory,
  //         "mongodb-atlas"
  //       );
  //       // console.log(mongoDB);
  //       dispatch(set_Db(mongoDB.db("TradeItDB")));
  //       const app = Stitch.defaultAppClient;
  //       dispatch(set_App(app));

  //       // dispatch(set_Mongo(mongoDB));

  //     })
  //       .catch(err => console.log('line 77 error ' + err));
  //   }
  // }

  // console.log(stateObj);

  // renderHomePageContent() {
  //   return (
  //       <View style={styles.container}>
  //         <HomeHeader />
  //         <HomeBody appInstance={this.state.myApp} mongoInstance={this.state.myDB} />
  //       </View>
  //     )
  // }

  render() {
    // if (this.state.isAppUpdated) {
      return (
        <View style={styles.container}>
          <HomeHeader />
          {/* <HomeBody appInstance={this.state.myApp} mongoInstance={this.state.myDB} /> */}
        </View>
      )
    // }
  }
};

// export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  }
});