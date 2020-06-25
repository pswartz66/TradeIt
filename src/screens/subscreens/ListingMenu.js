import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, Keyboard, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {
  save_Image,
  remove_Image,
  set_Title,
  set_Description,
  set_Price,
  submit_Trade,
  set_Location_Post
} from '../../redux/actions/index';
import { AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

const ListingMenu = ({ navigation }) => {

  // test logger to log out state object in its entirety
  const imageState = useSelector(state => ({
    state
  }));

  // set images Array in state to new variable
  // this appears to fix the async event issue trying to pass the images down in an
  // array through navigation props from ChooseImage component.
  let imageArray = imageState.state.selectImages.images;
  // console.log(imageArray);

  // create empty array of length 5
  let paneArray = new Array(5);
  // array to be filled/condensed 
  let shortenedArray = [];

  for (let i = 0; i < paneArray.length; i++) {
    if (imageArray[i] == null) {
      // console.log('blank was reached at position ' + i)
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

  // handle image selector async here, grabbed from chooseimage component
  // acting similar to class based component's componentDidMount function
  useEffect(() => {

    // grant permission to camera roll
    // is this expensive? for example, is useEffect continuously rendering?
    // in the case of get location async function 
    // it was logging device location 100s of times..
    getPermissionAsync();

  })

  // function to handle camera roll permission
  const getPermissionAsync = async () => {
    // currently only supporting ios
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('To view photos adjust camera roll permissions in settings.')
      }
    }
  };

  // cannot handle multiple image selection
  // for testing purposes let just use one image
  // can be modified using react hooks and camera roll from react-native
  // rather than using expo-image-picker

  // image selection
  const _addImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        // console.log(result);

        // save image to state
        saveImage(result.uri);

      }
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  // error hook, not currently saving this to state via redux
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocationPermissionAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    } else {

      console.log(status);

      try {

        // get current position from expo api
        let location = await Location.getCurrentPositionAsync({});

        // used to pass only latitude and longitude properties to state
        // for example we don't need "speed" or "altitude"
        let coords_Post = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }

        // set latitude and longitude of user device to state
        setLocationPost(coords_Post);

        // submit listing to DB, see function below
        submitListing();

      } catch (err) {
        console.log(err);
      }
    }
  };

  // set latitude and longitude of user device to state
  const setLocationPost = value => dispatch(set_Location_Post(value));



  // standard redux dispatch
  const dispatch = useDispatch();

  // destruct from state in root reducer
  const { images } = useSelector(state => ({
    ...state.selectImages,
  }))

  // saves the image selected from camera roll to states images object
  const saveImage = image => {
    if (images.length < 5) {
      dispatch(save_Image(image))
    }
  }

  const _removeImage = async (image) => {
    // filter initial images array down to images array minus removed image
    let result = imageArray.filter(anImage => anImage !== image)

    // dispatch the filtered result as an array in a payload -> see redux select image
    // NSMutableArray was bc we were modifying state which was already an array
    // cannot pass an array inside another array while spreading state inside the array etc..
    dispatch(remove_Image(result))
  }

  // submitTrade function will send your trade to home page
  // for all users to see
  const submitTrade = () => {
    console.log('trade was submitted');
    dispatch(submit_Trade())
    // console.log(imageState);

    // grant permission to user location when trade is submitted
    getLocationPermissionAsync();

  }

  // get text from input forms and update state
  // to be reloaded on main page
  const setTitle = value => dispatch(set_Title(value));
  const setDescription = value => dispatch(set_Description(value));
  const setPrice = value => dispatch(set_Price(value));

  // Add data to databse when submit button is clicked
  const submitListing = () => {
    // const app = imageState.state.dbSet.app;
    // get db instances from from state
    // is there a better way to store this rather than saving it to state?
    // for example one client object has a lot of layers, are they all necessary?
    const mongodb = imageState.state.dbSet.mongo;
    const client = imageState.state.dbSet.client;
    const goodsCollection = mongodb.db("TradeItDB").collection("Goods");

    // console.log(goodsCollection);

    // get form data from state object
    let formData = imageState.state;

    // authenticate and then insert a document into mongodb
    client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
      goodsCollection.insertOne({
        owner_id: client.auth.user.id,
        title: formData.listForms.title,
        price: formData.listForms.price,
        description: formData.listForms.description,
        images: formData.selectImages.images,
        location: formData.listForms.location_post
      })
      console.log(`Successfully inserted item with _id: ${user.id}`)
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch(console.error);
  }


  return (
    <View style={styles.listingModalContainer}>
      <View style={styles.imagesPane}>
        <ScrollView horizontal={true} style={styles.imagesScrollPane}>
          {shortenedArray.map((image) => {
            if (image === 'X') {
              return (
                // return imageAdd highlight/button
                <TouchableOpacity
                  onPress={_addImage}
                  key={image.toString()}
                >
                  <View source={{ uri: image }} imageStyle={{ borderRadius: 10 }} style={styles.imagesNotInPane} key={image.toString()}>

                    <Ionicons name="ios-add-circle" size={24} color={'#2196F3'} key={image.toString()} />
                  </View>
                </TouchableOpacity>
              )
            } else {
              return (
                // return the image selected
                <>
                  <TouchableOpacity
                    onPress={() => _removeImage(image)}
                    key={image.toString()}
                  >
                    <ImageBackground source={{ uri: image }} imageStyle={{ borderRadius: 10 }} style={styles.imagesInPane} key={image.toString()}>
                      <View style={styles.closeBtn} key={image.toString()}>
                        <Ionicons name="ios-close-circle" size={20} color={'#223c52'} key={image.toString()} />
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
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
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.priceInputForm}>
          <Text style={styles.formLabels}>Price $</Text>
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
            keyboardType={'decimal-pad'}
            keyboardAppearance={'light'}
            clearButtonMode={'while-editing'}
            returnKeyType={'done'}
            placeholder={'Enter a reasonable price'}
            placeholderTextColor={'black'}
            numberOfLines={1}
            onChangeText={setPrice}
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
            placeholder={'Describe the item you want to post'}
            placeholderTextColor={'black'}
            multiline={true}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.locationInputForm}>
          {/* <Text style={styles.formLabels}>Location</Text> */}

          {/* <Map /> */}

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

        <TouchableOpacity onPress={submitTrade}>
          <View style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Submit Trade</Text>
          </View>
        </TouchableOpacity>

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
  },
  closeBtn: {
    height: 88,
    width: 88,
    // paddingRight: 20,
    // paddingBottom: 40,
    // backgroundColor: 'red'
  },
  submitBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    margin: 10,
    borderRadius: 4,
    height: 40,
    backgroundColor: '#3bb535'
  },
  submitBtnText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 0.4
  }
})