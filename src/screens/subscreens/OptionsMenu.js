import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Slider, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { set_Distance, set_PriceFrom, set_PriceTo, apply_Filter, reset_Options } from '../../redux/actions/index';

const OptionsMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    // leaving old hooks as a reference for now, changed to redux below

    // distance slider value
    // const [value, setValue] = useState('50');

    // price range "from" and "to" $ values
    // const [fromValue, onFromChangeText] = useState('');
    // const [toValue, onToChangeText] = useState('');

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

    // standard redux dispatch
    const dispatch = useDispatch();

    // destruct from state in root reducer
    const { distance, priceFrom, priceTo } = useSelector(state => ({
        ...state.filterOptions,
    }))

    const fullState = useSelector(state => ({
        state
    }));

    // check price range
    const checkPriceRange = () => {
        if (priceFrom && priceTo) {
            if (priceFrom > priceTo) {
                return false;
            }
        }
    }

    // distance in miles for search location range
    const setDistance = value => dispatch(set_Distance(value));
    // distance in miles for search location range
    // function handleDistance(value) {
    //     dispatch({
    //         type: "SET_DISTANCE",
    //         payload: value
    //     })
    // }

    // price range "from" $ value
    const setPriceFrom = value => dispatch(set_PriceFrom(value));
    // price range "from" $ value
    // function handlePriceFrom(value) {
    //     dispatch({
    //         type: "SET_PRICE_FROM",
    //         payload: value
    //     })
    // }

    // price range "to" $ value
    const setPriceTo = value => dispatch(set_PriceTo(value));
    // price range "to" $ value
    // function handlePriceTo(value) {
    //     dispatch({
    //         type: "SET_PRICE_TO",
    //         payload: value
    //     })
    // }

    // return state and set values back to initial state
    const applyFilter = () => {
        dispatch(apply_Filter());
        // console.log(fullState);
        // console.log(distance, priceFrom, priceTo)
    };
    // return state and set values back to initial state
    // function applyFilter() {
    //     dispatch({
    //         type: "APPLY_FILTER"
    //     })
    //     console.log(distance, priceFrom, priceTo);
    // }


    // reset state
    const resetOptions = () => {
        dispatch(reset_Options());
        console.log(distance, priceFrom, priceTo);
    }
    // reset state
    // function handleReset() {
    //     dispatch({
    //         type: "RESET_OPTIONS"
    //     });
    //     console.log(distance, priceFrom, priceTo);
    // }


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
                            <Text style={styles.mileageText}>{distance} mi</Text>

                            <View style={styles.distanceOption}>
                                <Slider
                                    minimumValue={1}
                                    maximumValue={100}
                                    minimumTrackTintColor="#1EB1FC"
                                    maximumTractTintColor="#1EB1FC"
                                    step={.1}
                                    value={50}
                                    onValueChange={setDistance}
                                    style={styles.slider}
                                    thumbTintColor="#1EB1FC"
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
                                onChangeText={setPriceFrom}
                                value={priceFrom}
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
                                onChangeText={setPriceTo}
                                value={priceTo}
                            />

                            <View style={styles.filterButtons}>
                                <TouchableHighlight
                                    style={styles.saveButton}
                                    onPress={() => {
                                        if (!checkPriceRange) {
                                            // when testing seems like alert might be auto closing modal
                                            alert('Price From must be less than Price To');
                                            // resetOptions();
                                            // setModalVisible(true);
                                        } else {
                                            applyFilter();
                                            setModalVisible(false);
                                        }
                                        // checkPriceRange();
                                        // applyFilter();
                                    }}
                                >
                                    <Text style={styles.textStyle}>Apply Filter</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.exitButton}
                                    onPress={() => {
                                        resetOptions();
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Reset</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
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
