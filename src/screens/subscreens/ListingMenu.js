import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, ScrollView, Button, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";
import Map from '../../components/Map';

const ListingMenu = (props) => {

    // test logger to log out state object in its entirety
    const imageState = useSelector(state => ({
        state
    }));

    // set images Array in state to new variable
    // this appears to fix the async event issue trying to pass the images down in an
    // array through navigation props from ChooseImage component.
    let imageArray = imageState.state.selectImages.images;
    console.log(imageArray);

    // create empty array of length 5
    let paneArray = new Array(5);
    // array to be filled/condensed 
    let shortenedArray = [];

    for (let i = 0; i < paneArray.length; i++) {
        if (imageArray[i] == null) {
            console.log('blank was reached at position ' + i)
            paneArray[i] = "X";
            shortenedArray[i] = "X"
            break;
        } else {
            shortenedArray[i] = imageArray[i]
        }
    }

    // A placeholder until we get our own location
    const region = {
        latitude: 37.321996988,
        longitude: -122.0325472123455,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    // image selection
    const _addImage = async () => {
        console.log('route to camera roll again')
    }

    return (
        <View style={styles.listingModalContainer}>
            <View style={styles.imagesPane}>
                <ScrollView horizontal={true} style={styles.imagesScrollPane}>
                    {shortenedArray.map((image, key) => {
                        if (image === 'X') {
                            return (
                                // return imageAdd highlight/button
                                <>
                                    <ImageBackground source={{ uri: image }} imageStyle={{ borderRadius: 10 }} style={styles.imagesNotInPane} key={image}>
                                        <TouchableHighlight
                                            onPress={_addImage}    
                                        >
                                            <Ionicons name="ios-add-circle" size={24} color={'#2196F3'} />
                                        </TouchableHighlight>
                                    </ImageBackground>
                                </>
                            )
                        } else {
                            return (
                                // return the image selected
                                <>
                                    <ImageBackground source={{ uri: image }} imageStyle={{ borderRadius: 10 }} style={styles.imagesInPane} key={image}>
                                    
                                    </ImageBackground>
                                </>
                            )
                        }
                    }

                    )}


                </ScrollView>
            </View>

            <ScrollView style={styles.imageInputFormBackground}>
                <View style={styles.titleInputForm}>
                    <Text style={styles.formLabels}>*Title of your trade</Text>
                    <TextInput style={{
                        height: 46,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 16,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'*Give your item a title...'}
                        placeholderTextColor={'black'}
                        numberOfLines={1}
                    />
                </View>

                <View style={styles.priceInputForm}>
                    <Text style={styles.formLabels}>*What are you looking to trade for?</Text>
                    <TextInput style={{
                        height: 46,
                        width: '100%',
                        backgroundColor: '#e8e8e8',
                        borderRadius: 6,
                        padding: 8,
                        fontSize: 16,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'*Name something specific.'}
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
                        fontSize: 16,
                        fontWeight: "400",
                        marginTop: 8
                    }}
                        keyboardType={'ascii-capable'}
                        keyboardAppearance={'light'}
                        clearButtonMode={'while-editing'}
                        returnKeyType={'done'}
                        placeholder={'Decribe the item you want trade'}
                        placeholderTextColor={'black'}
                        multiline={true}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                </View>

                <View style={styles.locationInputForm}>
                    <Text style={styles.formLabels}>Location</Text>
                    <Map />

                    {/* <TextInput style={{
                        height: 450,
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
                    /> */}
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
        shadowColor: "black",
        shadowOpacity: .4,
        shadowRadius: 8,
        shadowOffset: {
            height: 5,
            width: 0
        }
    },
    imagesNotInPane: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 75,
        width: 75,
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: "#f2f2f2"
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