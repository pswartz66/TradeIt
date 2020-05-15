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
            <View style={styles.imagesPane}>
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

            <ScrollView style={styles.imageInputFormBackground}>
                <View style={styles.titleInputForm}>
                    <Text style={styles.formLabels}>Title</Text>
                    <TextInput style={{
                        height: 46,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 18,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'*Give your item a title...'}
                        placeholderTextColor={'black'}
                        // multiline={true}
                        numberOfLines={1}
                    />
                </View>

                <View style={styles.priceInputForm}>
                    <Text style={styles.formLabels}>Price</Text>
                    <TextInput style={{
                        height: 46,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 18,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'numeric'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'*Enter a reasonable price...'}
                        placeholderTextColor={'black'}
                        numberOfLines={1}
                    />
                </View>

                <View style={styles.descInputForm}>
                    <Text style={styles.formLabels}>Description</Text>
                    <TextInput style={{
                        height: 90,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 18,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'Decribe the item you want trade'}
                        placeholderTextColor={'black'}
                        numberOfLines={3}
                    />
                </View>

                <View style={styles.locationInputForm}>
                    <Text style={styles.formLabels}>Location</Text>
                    <TextInput style={{
                        height: 100,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 18,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'Choose a location...'}
                        placeholderTextColor={'black'}
                        numberOfLines={1}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ListingMenu;

const styles = StyleSheet.create({
    listingModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imagesScrollPane: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        
    },
    imagesPane: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 0,
        width: '100%',
        backgroundColor: '#e8e8e8',
        
    },
    imagesInPane: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 75,
        width: 75,
        borderRadius: 10,
        backgroundColor: 'yellow',
        shadowColor: "black",
        shadowOpacity: .4,
        shadowRadius: 8,
        shadowOffset: {
            height: 5,
            width: 0
        }
    },
    formLabels: {
        color: '#2196F3',
        fontSize: 20,
        marginTop: 2,
        marginLeft: 4,
        fontWeight: '500',
        letterSpacing: 0.4
    },
    imageInputFormBackground: {
        flex: 1,
        width: '100%',
        backgroundColor: '#3c4b52'
    },
    titleInputForm: {
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#3c4b52'
    },
    priceInputForm: {
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#3c4b52'
    },
    descInputForm: {
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#3c4b52'
    },
    locationInputForm: {
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#3c4b52'
    }
})