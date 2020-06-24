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

  const totalState = useSelector(state => ({
    state
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
    // persist to handle synthetic event
    event.persist();
    dispatch(submit_Query());
    // dispatch()
    console.log(totalState.state)
    // dispatch(log_State());
    // removeSearch();
  }
  // clear search in state
  const removeSearch = () => {
    dispatch(remove_Query());
    console.log(search);
  }
  return (
    <View>
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

      {/* ideally this page will contain two themes,
                1. render random items from the database
                2. on user search, query the db to filter on items
                   equal or related to the search term */}
      <View style={styles.homeBody}>
        <Text>
          Content to be rendered:
          1. random list of items when user first opens app
          2. items queried from the DB when user inputs string into search bar

          Note: a) simply display cards for each item maybe 2 or 3 to a row
          b) render a new page showing all pictures for that item and description
          c) handle interaction logic between people

          These should be the general concepts/next steps
        </Text>
      </View>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  },
  homeBody: {
    flex: 1,
    padding: 10,
    backgroundColor: 'orange'
  }
})