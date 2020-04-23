import React from 'react';
// import { Router, Scene } from 'react-native-router-flux';
// import { Provider, connect } from 'react-redux';
// import configureStore from './src/store/configureStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/login';

// const RouterWithRedux = connect()(Router);
// const store = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Provider store={store}>
    //   <RouterWithRedux>
    //     <Scene key='Login' component={Login} title='Login Page'/>
    //   </RouterWithRedux>
    // </Provider>
  );
}
