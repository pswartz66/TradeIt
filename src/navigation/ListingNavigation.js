

// old way of using navigation would go here
// i.e. creating a separate file to navigate between screens
// instead I chose to use Stack.Navigator => see root.js

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListingMenu from '../screens/subscreens/ListingMenu';
import ChooseImage from '../components/ChooseImage';
const Stack = createStackNavigator();

const ListingScreens = createStackNavigator({
    ChooseImage: {
        screen: ChooseImage
    },
    ListingMenu: {
        screen: ListingMenu
    }
});

// function ListingScreens() {
//     return (
//         <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="ListingMenu" component={ListingMenu} />
//         </Stack.Navigator>
//         </NavigationContainer>
//     );
// }


// const ListingStack = createStackNavigator(ListingScreens);

// export default ListingStack;
export default ListingScreens;