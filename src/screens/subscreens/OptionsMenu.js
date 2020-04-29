import React, { Component, useState, useEffect } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Slider,
    TextInput
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
// import { setOptions } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";

import allActions from '../../redux/actions/index';

const OptionsMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    // distance slider value
    const [value, setValue] = useState('50');

    // price range "from" and "to" $ values
    const [fromValue, onFromChangeText] = useState('');
    const [toValue, onToChangeText] = useState('');

    // all filtered options as object
    // const [filteredOptions, applyFilter] = useState({
    //     distance: '',
    //     from: '',
    //     to: ''
    // });

    // used to test inputs and slider values after applying filter
    // useEffect(() => {
    //     if (fromValue !== 'From' && toValue !== 'To' && value !== '50') {
    //         console.log(filteredOptions);
    //     }
    // });


    const dispatch = useDispatch();

    const opened = useSelector(state => state.modalOpts.isOpen);
    const closed = useSelector(state => state.modalOpts.isOpen);


    // const modalOpen = () => dispatch(isModalOpen());

    function modalOpenedBool() {
        dispatch({
            type: "MODAL_OPENED",
        });
    }

    function modalClosedBool() {
        dispatch({
            type: "MODAL_CLOSED",
        });
    }

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
                        <View style={styles.innerModalContainer}>
                            <Text style={styles.distanceTextHead}>Distance:</Text>
                            <Text style={styles.mileageText}>{Math.round(value, 0)} mi</Text>
                            <View style={styles.distanceOption}>
                                <Slider
                                    minimumValue={1}
                                    maximumValue={100}
                                    minimumTrackTintColor="#1EB1FC"
                                    maximumTractTintColor="#1EB1FC"
                                    step={.1}
                                    value={50}
                                    onValueChange={value => setValue(value)}
                                    style={styles.slider}
                                    thumbTintColor="#1EB1FC"
                                    onSlidingComplete={() => applyFilter({ ...filteredOptions, distance: Math.round(value, 0) })}
                                />
                            </View>

                            <Text style={styles.priceTextHead}>Price:</Text>
                            <TextInput style={{
                                height: 42,
                                width: '100%',
                                backgroundColor: '#e8e8e8',
                                borderRadius: 6,
                                padding: 8,
                                fontSize: 20,
                                fontWeight: "600",
                            }}
                                keyboardType={'number-pad'}
                                keyboardAppearance={'light'}
                                clearButtonMode={'while-editing'}
                                returnKeyType={'done'}
                                placeholder={'From'}
                                placeholderTextColor={'black'}
                                onChangeText={fromValue => onFromChangeText(fromValue)}
                                value={fromValue}
                                onEndEditing={() => applyFilter({ ...filteredOptions, from: fromValue })}
                            />

                            <TextInput style={{
                                height: 42,
                                width: '100%',
                                backgroundColor: '#e8e8e8',
                                borderRadius: 6,
                                padding: 8,
                                fontSize: 20,
                                fontWeight: "600",
                                marginTop: 14
                            }}
                                keyboardType={'number-pad'}
                                keyboardAppearance={'light'}
                                clearButtonMode={'while-editing'}
                                returnKeyType={'done'}
                                placeholder={'To'}
                                placeholderTextColor={'black'}
                                onChangeText={toValue => onToChangeText(toValue)}
                                value={toValue}
                                onEndEditing={() => applyFilter({ ...filteredOptions, to: toValue })}
                            />
                            
                            <View style={styles.filterButtons}>
                                <TouchableHighlight
                                    style={styles.saveButton}
                                    onPress={() => {
                                        // applyFilter({
                                        //     ...filteredOptions
                                        // });
                                        //dispatch(setOptions.applyFilter(filteredOptions));
                                        setValue(50);
                                        onFromChangeText('');
                                        onToChangeText('');
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Apply Filter</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.exitButton}
                                    onPress={() => {
                                        modalClosedBool();
                                        setValue(50);
                                        onFromChangeText('');
                                        onToChangeText('');
                                        setModalVisible(!modalVisible);
                                        // console.log(opened);

                                    }}
                                >
                                    <Text style={styles.textStyle}>Exit</Text>
                                </TouchableHighlight>

                            </View>
                        </View>


                    </View>
                    <Text style={{color: 'black', marginTop: 40}}>STATE: {`${closed}`}</Text>

                </View>
            </Modal>

            <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                    // dispatch(allActions.modalOpen(true));
                    modalOpenedBool();
                    console.log('highlight clicked: ' + opened);
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
        // margin: 20,
        height: '55%',
        width: '90%',
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    innerModalContainer: {
        height: '55%',
        width: '90%',
        backgroundColor: "white",
        borderRadius: 8,
        padding: 0,
        alignItems: 'flex-start',

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
        // alignItems: 'baseline',
        // justifyContent: 'center',
        padding: 10,
        elevation: 0,
        marginTop: 40,
        width: 110
    },
    exitButton: {
        backgroundColor: "#e32424",
        borderRadius: 4,
        // alignItems: 'baseline',
        // justifyContent: 'center',
        padding: 10,
        elevation: 0,
        marginTop: 40,
        width: 110
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center'
    },
    modalText: {
        // marginBottom: 15,
        fontSize: 18,
        margin: 10,
        textAlign: "left",
        justifyContent: 'flex-start'
    },
    distanceOption: {
        width: '100%'
    },
    mileageText: {
        paddingTop: 10,
        paddingBottom: 4,
        fontSize: 20,
        fontWeight: "700"
    },
    distanceTextHead: {
        fontSize: 18,
        paddingTop: 10,
        // fontWeight: "500"
    },
    modalHeader: {
        marginTop: 8,
        fontSize: 17,
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    priceTextHead: {
        fontSize: 18,
        paddingTop: 18,
        paddingBottom: 10
    },
    filterButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    }
});

export default OptionsMenu;