import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';


const Home = () => {

    return (
        <View style={styles.container}>
            <HomeHeader />

        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});