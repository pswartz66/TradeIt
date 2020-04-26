import React, { Component, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

const OptionsMenu = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{ ...styles.saveButton }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Save Filter</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                    console.log('highlight clicked');
                    setModalVisible(true);
                }}
            >
                <Ionicons name={'ios-options'} size={32} color={'white'} />

            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
        // opacity: .9
    },
    modalView: {
        margin: 20,
        height: '55%',
        width: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#2196F3",
        borderRadius: 4,
        alignItems: 'center',
        paddingTop: 2,
        paddingLeft: 4,
        paddingRight: 4,
        elevation: 0
    },
    saveButton: {
        backgroundColor: "#2196F3",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 0
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default OptionsMenu;