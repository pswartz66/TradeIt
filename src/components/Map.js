import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


const Map = (props) => {

    return (

        <MapView
            style={styles.mapContainer}
            // region={region}
            showsUserLocation
            showsMyLocationButton
        >
        </MapView>
    )
}


export default Map;

const styles = {
    mapContainer: {
        // flex: 1,
        height: 200,
        width: '100%',
        borderRadius: 4,
        marginTop: 8
    }
}