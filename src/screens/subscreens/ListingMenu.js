import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, ScrollView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";

const ListingMenu = (props) => {

    // once image of listing is selected
    // add a Title
    // add a Price
    // add a description
    // add a location
    // select a category?

    // test logger to log out state object in its entirety
    const imageState = useSelector(state => ({
        state
    }));

    // set images Array in state to new variable
    // this appears to fix the async event issue trying to pass the images down in an
    // array through navigation props from ChooseImage component.
    let imageArray = imageState.state.selectImages.images;
    console.log(imageArray);

    let paneArray = new Array(5);

    // set image variable from route params passed in from ChooseImage component
    // let myImage = props.route.params.image.uri;
    // let allImages = props.route.params.imageArr;
    // console.log(allImages);

    // console.log("MENU ",  props);

    return (
        <View style={styles.listingModalContainer}>
            <View style={styles.imagesPane} >
                <ScrollView horizontal={true} style={styles.imagesScrollPane}>
                    {imageArray.map((image, key) =>
                        <>
                            <ImageBackground source={{ uri: image }} imageStyle={{ borderRadius: 10 }} style={styles.imagesInPane} key={image}>
                                <Ionicons name="ios-add-circle" size={24} color={'#2196F3'} />
                            </ImageBackground>
                        </>
                    )}


                </ScrollView>
            </View>

            <View style={styles.imageInputForm}>
                <Text style={styles.formLabels}>Description:</Text>
                <TextInput style={{
                    height: 100,
                    width: '90%',
                    backgroundColor: '#e8e8e8',
                    borderRadius: 6,
                    padding: 8,
                    fontSize: 18,
                    fontWeight: "400",
                    marginTop: 14
                }}
                    keyboardType={'ascii-capable'}
                    keyboardAppearance={'light'}
                    clearButtonMode={'while-editing'}
                    returnKeyType={'done'}
                    placeholder={'Add a description...'}
                    placeholderTextColor={'black'}
                    // multiline={true}
                    numberOfLines={3}
                // onChangeText={}
                // value={}
                />
            </View>
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
        height: '100%',
        backgroundColor: 'red'
    },
    imagesScrollPane: {
        flex: 1,
        // width: '100%',
        backgroundColor: '#e8e8e8'
    },
    imagesPane: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
        width: '100%',
        backgroundColor: '#e8e8e8'
    },
    imagesInPane: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 75,
        width: 75,
        borderRadius: 10,
        backgroundColor: 'yellow'
    },
    formLabels: {
        color: 'black',
        fontSize: 22,
        marginTop: 10
    },
    imageInputForm: {
        flex: 1,
        alignItems: 'center',
        margin: 0,
        height: '100%',
        width: '100%',
    }
})