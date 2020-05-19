import React from 'react';

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
const RootTabScreen = () => (
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
                backgroundColor: 'white',
                // borderTopColor: '#000000'
            },
            showLabel: false
        }}
    >
        <RootTab.Screen name="Home" component={Home} />
        <RootTab.Screen name="Camera" component={CameraStackScreen} />
        <RootTab.Screen name="Profile" component={Profile} />
    </RootTab.Navigator>
)

// Root Navigation Container
// all navigation stacks for rest of app start here
export default function Root() {
    return (
        <NavigationContainer>
            <RootTabScreen />
        </NavigationContainer>
    )
}






