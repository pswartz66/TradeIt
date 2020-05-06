import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

const ListingMenu = () => {


    return (
        <View style={styles.listingModalContainer}>
            
            <Text>
                create listing view/modal here but need to remove the camera roll button
                is there a way to do this in navigation?
            </Text>
            
            {/* <Image source={{ uri: images }} style={{ width: 200, height: 200 }} /> */}

        </View>
    )
}

export default ListingMenu;

const styles = StyleSheet.create({
    listingModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#d5e4ed'
    }
})