import React from 'react';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ChooseImage extends React.Component {
    state = {
        image: null,
        formEntered: false
    }

    render() {
        let { image } = this.state;

        return (
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    title="Choose image from camera roll"
                    onPress={this._pickImage}
                    style={{ width: 210, marginTop: 30, backgroundColor: '#48a4d9', paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10, borderRadius: 4 }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                        Launch camera roll
                    </Text>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </TouchableOpacity>
            </View>
        )
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
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
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });

                // when image gets selected
                // create a form view for entering the title, descr, and price
                // <ComponentEntryForm />

            }

            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        // width: 100
    }
})