import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import InitialSplashScreen from './src/components/InitialSplashScreen';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";

// Root level of app
import Root from './src/root';

const store = configureStore();

// export default class App extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = { isLoadingSplash: true }
// }

// loadTimeTask = async() => {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => { resolve('result') },
//       2000
//     )
//   });
// }

// async componentDidMount() {
//   const data = await this.loadTimeTask();

//   if (data !== null) {
//     this.setState({ isLoadingSplash: false });
//   }
// }


// render() {

export default function App() {

  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  const [myClient, setmyClient] = useState(undefined);
  const [myDB, setmyDB] = useState(undefined);
  const [myApp, setmyApp] = useState(undefined);
  const [complete, isCompleted] = useState(false);

  const loadTimeTask = async () => {
    return new Promise((resolve) => {

      setTimeout(
        () => { resolve('result') },
        3000
      );

    });
  }

  useEffect(() => {

    async function whileLoading() {
      const data = await loadTimeTask();
      const setupStitch = await dbInitialize();

      if (data !== null && setupStitch !== null) {
        setIsLoadingSplash(false);

      }
    }
    whileLoading();

    // used as cleanup, i.e. useEffect needs to return 'something'
    return (console.log('initial app file finished'));

  }, [complete === false]);


  const dbInitialize = async () => {
    let mongoDB;

    if (Stitch.hasAppClient("tradeitrealm-gdxsi")) {

      // console.log('app already has client');

      let existingClient;

      existingClient = Stitch.getAppClient("tradeitrealm-gdxsi");

      setmyClient(existingClient);

      // Define MongoDB Service    
      mongoDB = existingClient.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );

      setmyDB(mongoDB.db("TradeItDB"));
      setmyApp(Stitch.defaultAppClient);

      return (isCompleted(true));

    } else {

      // console.log('app DOES NOT already have a client');

      Stitch.initializeDefaultAppClient("tradeitrealm-gdxsi").then(client => {
        setmyClient(client);        

        // Define MongoDB Service    
        mongoDB = client.getServiceClient(
          RemoteMongoClient.factory,
          "mongodb-atlas"
        );

        setmyDB(mongoDB.db("TradeItDB"));
        setmyApp(Stitch.defaultAppClient);

        return (isCompleted(true));

      }).catch(error => {
        console.log('handled error:   ' + error)
      });

    }
    // console.log(myApp);
  }

  if (isLoadingSplash) {
    return (<InitialSplashScreen />)
  }

  return (
    <Provider store={store}>
      <Root client={myClient} db={myDB} app={myApp}/>
    </Provider>
  );
}

