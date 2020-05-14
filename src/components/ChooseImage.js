import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { useSelector, useDispatch } from "react-redux";
import { save_Image } from '../redux/actions/index';
// import ListingMenu from '../screens/subscreens/ListingMenu';


const ChooseImage = ({ navigation }) => {

    // acting similar to class based component's componentDidMount function
    useEffect(() => {
        getPermissionAsync();
    })

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
    const _pickImage = async () => {
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

    // standard redux dispatch
    const dispatch = useDispatch();

    // test logger to log out state object in its entirety
    // const imageState = useSelector(state => ({
    //     state
    // }));

    // destruct from state in root reducer
    const { images } = useSelector(state => ({
        ...state.selectImages,
    }))

    // saves the image selected from camera roll to states images object
    const saveImage = image => {

        if (images.length < 5) {
            dispatch(save_Image(image))
            // log out image path -> images === single image
            // console.log('this is images \n' + images)
            navigateToListing();
        } else {
            navigateToListing();

        }


    }

    // navigate to next screen after image selection
    const navigateToListing = () => {
        // console.log(image);
        // console.log(imageState);
        // let imageArr = imageState.state.selectImages.images;

        // console.log(imageArr);

        navigation.navigate("ListingMenu");
    }

    return (
        <View style={styles.imageContainer}>
            <TouchableOpacity
                title="Choose image from camera roll"
                // onPress={() => navigation.navigate("ListingMenu")}
                onPress={_pickImage}
                style={{
                    width: 210, marginTop: 30, backgroundColor: '#0454ab', paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10, borderRadius: 4,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 6.84,
                }}
            >
                <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                    Launch camera roll
                </Text>



            </TouchableOpacity>

        </View>
    )

}

export default ChooseImage;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#d5e4ed'
    }
})