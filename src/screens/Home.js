import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';

export default class Home extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <HomeHeader />
                {/* <Text>
                    Home Screen
                </Text> */}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});