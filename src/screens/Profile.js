import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';




export default class Profile extends React.Component {

    // sample data for now, will contain images of products traded
    DATA = [
        {
            id: 'bd7acbea',
            title: 'First Item',
        },
        {
            id: '3ac68afc',
            title: 'Second Item',
        },
        {
            id: '58694a0f',
            title: 'Third Item',
        },
        {
            id: '58694a0f',
            title: 'Fourth Item',
        },
    ];
    render() {
        return (
            <View style={styles.profContainer}>

                <View style={styles.profTopContainer}>
                    <View style={styles.profTopContainerImg}>

                    </View>
                    <Text style={styles.profTextUserName}>
                        username
                    </Text>
                </View>

                <ScrollView>
                    <View style={styles.profBodyContainer}>

                        <Text style={styles.profTextBody}>
                            History
                         </Text>

                        <SafeAreaView>
                            <FlatList
                                style={styles.profFlatListItems}
                                vertical={true}
                                data={this.DATA}
                                renderItem={({ item }) => (

                                    <ListItem
                                        id={item.id}
                                        style={styles.profListItems}
                                        title={
                                            <View>
                                                <Text>
                                                    Traded: {`${item.title}`} ~$X
                                                    for item >>
                                                </Text>
                                            </View>
                                        }
                                    />
                                )}
                                keyExtractor={item => item.id}

                            />

                        </SafeAreaView>

                    </View>
                </ScrollView>

            </View>

        )
    }
};

const styles = StyleSheet.create({
    profContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    profTopContainerImg: {
        marginTop: 10,
        marginRight: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        height: 60,
        width: 60
    },
    profTopContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: -90,
        paddingBottom: 12,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,

    },
    profTextUserName: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Noteworthy',
        letterSpacing: .4
    },
    profTextBody: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'ChalkboardSE-Light',
        letterSpacing: .1
    },
    profBodyContainer: {
        height: 600,
        padding: 10,
        backgroundColor: '#0d0d0d',
        // overflow: 'visible'
    },
    profListItems: {
        paddingTop: 20,
        borderRadius: 50,
        // width: 120

    },
    profFlatListItems: {
        // padding: 0,
        height: 160,
        overflow: 'visible'

    }
});