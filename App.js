import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import InitialSplashScreen from './src/components/InitialSplashScreen';
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from './src/redux/actions/index';

// Root level of app
import Root from './src/root';
// const INITIAL_STATE = {
//   isModalOpen: false
// }

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
  // standard redux dispatch
  // const dispatch = useDispatch();

  const [isLoadingSplash, setIsLoadingSplash] = useState(true);

  const loadTimeTask = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => { resolve('result') },
        3000
      )
    });
  }

  useEffect(() => {

    async function whileLoading() {
      const data = await loadTimeTask();

      if (data !== null) {
        setIsLoadingSplash(false);
      }
    }
    whileLoading();

    // used as cleanup, i.e. useEffect needs to return 'something'
    return (console.log('finished'));

  });


  if (isLoadingSplash) {
    return (
      <InitialSplashScreen />
    )
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}



// }
