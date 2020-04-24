import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    // handles the ability to type into the SearchBar
    updateSearchQuery = searchQuery => {
        this.setState({ searchQuery });
    }

    // clear search
    cancelSearch = () => {
        this.setState({ searchQuery: '' });
    }

    // query some db for items users have posted
    queryFindSpecificItem = () => {
        const { searchQuery } = this.state;
        // let myRegex = new RegExp(searchQuery);
        
        console.log(searchQuery);

        // clear input form
        this.cancelSearch();
    }

    render() {
        const { searchQuery } = this.state;
        return (
            <View style={styles.container}>

                <View style={styles.homeHead}>
                    <Image style={{ height: 35, width: 70 }} source={require('../assets/icons/apple-touch-icon.png')} />

                    <SearchBar
                        inputStyle={{ fontSize: 16, backgroundColor: 'white', paddingLeft: 10, borderRadius: 8 }}
                        containerStyle={{ backgroundColor: '#0454ab', width: '92%', borderWidth: 0, borderTopColor: '#0454ab', borderBottomColor: '#0454ab' }}
                        inputContainerStyle={{ backgroundColor: '#0454ab' }}
                        leftIconContainerStyle={{ backgroundColor: '#0454ab', marginLeft: 0, marginRight: 0 }}
                        rightIconContainerStyle={{ backgroundColor: '#0454ab', marginLeft: 0, marginRight: 0 }}
                        searchIcon={{ color: '#04f40b', size: 22 }}
                        placeholderTextColor={'#g5g5g5'}
                        placeholder={'Search for stuff to trade...'}
                        ref={search => this.search = search}
                        value={searchQuery}
                        onChangeText={this.updateSearchQuery}
                        onClear={this.cancelSearch}
                        onSubmitEditing={this.queryFindSpecificItem}
                    />
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
    },
    homeHead: {
        paddingTop: 25,
        paddingLeft: 10,
        height: 124,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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