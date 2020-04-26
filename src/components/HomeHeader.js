import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OptionsMenu from '../screens/subscreens/OptionsMenu';


export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    // handles the ability to type into the SearchBar
    updateSearchQuery = searchQuery => {
        this.setState({ searchQuery });
    }

    // clear search
    clearSearch = () => {
        this.setState({ searchQuery: '' });
        // this.cancel.search();
    }

    // query some db for items users have posted
    queryFindSpecificItem = () => {
        const { searchQuery } = this.state;
        // let myRegex = new RegExp(searchQuery);

        console.log(searchQuery);

        // clear input form
        this.clearSearch();
    }

    render() {
        const { searchQuery } = this.state;

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
                            ref={search => this.search = search}
                            value={searchQuery}
                            onChangeText={this.updateSearchQuery}
                            onClear={this.clearSearch}
                            onSubmitEditing={this.queryFindSpecificItem}
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
    }
}

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