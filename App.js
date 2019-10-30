import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import DestinationButton from './components/DestinationButton';
import {CurrentLocationButton} from './components/CurrentLocationButton';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      region: null,
    };
    this.getLocationsync ();
  }

  getLocationsync = async () => {
    let {status} = await Permissions.askAsync (Permissions.LOCATION);
    if (status != 'granted') {
      console.log ('Location permission not granted');

      let location = await Location.getCurrentPositionAsync ({
        enableHighAccuracy: true,
      });

      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      };
      this.setState ({region: region});
    }
  };
  render () {
    return (
      <View style={styles.container}>
        <DestinationButton />
        <MapView
          showsUserLocation={true}
          initialRegion={this.state.region}
          style={{flex: 1, zIndex: 0}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
