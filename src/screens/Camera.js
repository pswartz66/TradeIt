import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChooseImage from '../components/ChooseImage';

export default class Camera extends React.Component {
    

    render() {
        return (
            // <View style={styles.container}>
            //     <Text>
            //         Camera Screen
            //     </Text>
            // </View>
            <ChooseImage />
        )
    }
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });