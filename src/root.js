import React from 'react';

// redux
import { useSelector, useDispatch } from "react-redux";
import { set_Client, set_Mongo, set_Db, set_App } from './redux/actions/index';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Home from './screens/Home';
// import Camera from './screens/Camera';
import Profile from './screens/Profile';
import ListingMenu from './screens/subscreens/ListingMenu';
import ChooseImage from './components/ChooseImage';

// import Ionicons from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Camera stack for when user is on camera TAB
// here we'll let the user select an image from camera roll
// and fill out a form for price/description/location of item
const CameraStack = createStackNavigator();
const CameraStackScreen = () => (
  <CameraStack.Navigator>
    <CameraStack.Screen name="ChooseImage" component={ChooseImage} />
    <CameraStack.Screen name="ListingMenu" component={ListingMenu} />
  </CameraStack.Navigator>
)


// Root bottom tab navigation
const RootTab = createBottomTabNavigator();
const RootTabScreen = (props) => {

  // standard redux dispatch
  const dispatch = useDispatch();
  dispatch(set_App(props.app));

  return (
    <RootTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home'
            size = 30
          } else if (route.name === 'Camera') {
            iconName = 'ios-camera'
            size = 44
          } else if (route.name === 'Profile') {
            iconName = 'ios-person'
            size = 30
          }

          // return icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2196F3',
        inactiveTintColor: '#3c4b52',
        style: {
          height: 70,
          backgroundColor: 'white'
        },
        showLabel: false
      }}
    >
      <RootTab.Screen name="Home" component={Home} />
      <RootTab.Screen name="Camera" component={CameraStackScreen} />
      <RootTab.Screen name="Profile" component={Profile} />
    </RootTab.Navigator>
  )
}

// Root Navigation Container
// all navigation stacks for rest of app start here
export default function Root(props) {

  // test logger to log out state object in its entirety
  // const stateObj = useSelector(state => ({
  //   state
  // }));

  // standard redux dispatch
  // const dispatch = useDispatch();

  // since root is wrapped in redux provider, I should be able to 
  // set the client, db, and app to redux state... here using dispatch
  // console.log(props);


  // dispatch(set_Client(props.client));
  // dispatch(set_Db(props.db));
  // dispatch(set_App(props.app));

  return (
    <NavigationContainer>
      <RootTabScreen app={props.app} db={props.db} client={props.client} />
    </NavigationContainer>
  )
}






