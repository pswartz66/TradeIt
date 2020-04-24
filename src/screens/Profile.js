import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    FlatList
} from 'react-native';
import { ListItem, Image } from 'react-native-elements';




export default class Profile extends React.Component {

    // sample data for now, will contain images of products traded
    DATA = [
        {
            id: 'bd7acbea',
            title: 'Vintage Baseball Bat',
            desc: 'My first item is a...',
            price: '60',
            imgCap: 'https://www.stickpng.com/assets/images/5863b6db7d90850fc3ce2932.png'
        },
        {
            id: '3ac68afc',
            title: 'tennis racket',
            desc: 'My second item is a...',
            price: '45',
            imgCap: 'https://www.pngarts.com/files/3/Tennis-Racket-PNG-Transparent-Image.png'
        },
        {
            id: '58694a0f',
            title: 'motorcycle',
            desc: 'My third item is a...',
            price: '2500',
            imgCap: 'https://pngimg.com/uploads/motorcycle/motorcycle_PNG5341.png'
        },
        {
            id: '58694a0f',
            title: 'surfboard',
            desc: 'My fourth item is a...',
            price: '350',
            imgCap: 'https://cdn.imgbin.com/24/16/15/imgbin-product-design-surfboard-high-voltage-2ybE1cSmvXk1emSALdVDRPQzc.jpg'

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
                            Trade History
                         </Text>

                        <SafeAreaView>
                            <FlatList
                                style={styles.profFlatListItems}
                                vertical={true}
                                data={this.DATA}
                                renderItem={({ item }) => (
                                    <>
                                    {/* <Image 
                                        source={{ uri: item.imgCap }}
                                        style={{ width: 80, height: 80 }}/> */}
                                    <ListItem
                                        // id={item.id}
                                        leftAvatar={{ 
                                            rounded: false,
                                            size: 70,
                                            source: { uri: item.imgCap }}}
                                        style={styles.profListItems}
                                        title={
                                            <View>
                                                <Text>
                                                    Traded: {`${item.title}`} ${`${item.price} `}
                                                    for item >>
                                                </Text>
                                            </View>
                                        }
                                        key={item.id}
                                    />
                                    </>
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
        width: 60,
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