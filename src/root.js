import React from 'react';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Home from './screens/Home';
import Camera from './screens/Camera';
import Profile from './screens/Profile';


// import Ionicons from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Root() {
    return (

            <NavigationContainer>
                <Tab.Navigator
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
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Camera" component={Camera} />
                    <Tab.Screen name="Profile" component={Profile} />
                
                </Tab.Navigator>

            </NavigationContainer>


    )
}






