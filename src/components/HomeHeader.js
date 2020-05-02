import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import OptionsMenu from '../screens/subscreens/OptionsMenu';
import { useSelector, useDispatch } from "react-redux";
import { search_Query, submit_Query, remove_Query } from '../redux/actions/index';


const HomeHeader = () => {

    // standard redux dispatch
    const dispatch = useDispatch();

    // destruct from state in root reducer
    const { search } = useSelector(state => ({
        ...state.searchQueries
    }))

    // setSearch handles text input entered into search bar
    const setSearch = value => {
        dispatch(search_Query(value));
        console.log(search);
    }
    // submit when return key is pressed on keyboard
    const submitSearch = (event) => {
        // event.stopPropagation();
        // event.preventDefault();
        event.persist();
        dispatch(submit_Query());
        removeSearch();
        console.log(search)
    }
    // clear search in state
    const removeSearch = () => {
        dispatch(remove_Query());
        console.log(search);
    }
    return (
        <View style={styles.container}>
            <View style={styles.homeHead}>
                <Image style={{ justifyContent: 'center', height: 30, width: 70, marginTop: 10 }} source={require('../assets/icons/apple-touch-icon.png')} />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SearchBar
                        platform={'ios'}
                        inputStyle={{ fontSize: 16, backgroundColor: 'white', paddingLeft: 10, borderRadius: 8 }}
                        containerStyle={{ backgroundColor: '#0454ab', width: '84%', borderWidth: 0, borderTopColor: '#0454ab', borderBottomColor: '#0454ab' }}
                        inputContainerStyle={{ backgroundColor: '#0454ab' }}
                        leftIconContainerStyle={{ backgroundColor: '#0454ab', marginLeft: 0, marginRight: 6 }}
                        rightIconContainerStyle={{ backgroundColor: '#0454ab', marginLeft: 0, marginRight: 0 }}
                        searchIcon={{ color: 'white', size: 22 }}
                        placeholderTextColor={'grey'}
                        placeholder={'Search for stuff to trade...'}
                        // ref={search => this.search = search}
                        // value={searchQuery}
                        value={search}
                        // onChangeText={this.updateSearchQuery}
                        onChangeText={setSearch}
                        // onClear={this.clearSearch}
                        onClear={removeSearch}
                        // onSubmitEditing={this.queryFindSpecificItem}
                        onSubmitEditing={(e) => submitSearch(e)}
                        cancelButtonProps={{ buttonTextStyle: { fontSize: 16 }, color: 'white' }}
                        clearIcon={false}
                        keyboardAppearance={'dark'}
                        keyboardType={'default'}
                    />

                    <TouchableOpacity>
                        <OptionsMenu />
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    )
    // }
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#d5e4ed',
        // opacity: .5
    },
    homeHead: {
        paddingTop: 20,
        paddingLeft: 0,
        height: 128,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'space-between',
        // justifyContent: 'center',
        backgroundColor: '#0454ab',
        shadowColor: "#000000",
        shadowOpacity: .8,
        shadowRadius: 4,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
})