import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ListingMenu = ( props ) => {

    // once image of listing is selected
    // add a Title
    // add a Price
    // add a description
    // add a location
    // select a category?

    // set image variable from route params passed in from ChooseImage component
    let myImage = props.route.params.image.uri;

    // console.log("MENU ",  props);

    return (
        <View style={styles.listingModalContainer}>
            
            <Text>
                create listing view/modal here but need to remove the camera roll button
                is there a way to do this in navigation?
            </Text>
            
            <Image source={{ uri: myImage }} style={{ width: 200, height: 200 }} />

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
        // backgroundColor: 'red'
    }
})