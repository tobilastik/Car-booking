import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import {device} from '../constants';
import colors from '../constants/color';
import PitchHeader from '../components/PitchHeader';

const {PROVIDER_GOOGLE} = MapView;

class Explore extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      showMap: true,
      userLat: '',
      userLon: '',
      //region:
      markers: [
        {
          latlng: {
            latitude: 7.5187,
            longitude: 4.5220,
          },
          title: 'THE PITCH VENUE',
          description: 'Oduduwa Hall',
        },
      ],
    };
  }

  async componentDidMount () {
    // get exisiting locaton permissions first
    const {status: existingStatus} = await Permissions.getAsync (
      Permissions.LOCATION
    );
    let finalStatus = existingStatus;

    // ask again to grant locaton permissions (if not already allowed)
    if (existingStatus !== 'granted') {
      const {status} = await Permissions.askAsync (Permissions.LOCATION);
      finalStatus = status;
    }

    // still not allowed to use location?
    if (finalStatus !== 'granted') {
      return;
    }

    const {coords} = await Location.getCurrentPositionAsync ();

    this.setState ({
      showMap: true,
      userLat: coords.latitude,
      userLon: coords.longitude,
    });
  }

  render () {
    const {showMap, userLat, userLon} = this.state;

    return (
      <View style={styles.container}>

        {showMap &&
          <View style={{marginTop: StatusBar.currentHeight}}>
            <MapView
              region={this.state.region}
              mapType={'hybrid'}
              followsUserLocation
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: userLat,
                longitude: userLon,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              showsUserLocation
              style={styles.map}
            >

              {this.state.markers.map (marker => (
                <Marker
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  image={{uri: `http://sfc.oauife.edu.ng/images/logo.png`}}
                />
              ))}

            </MapView>
            <PitchHeader />
          </View>}

        {!showMap &&
          <View style={styles.containerNoLocation}>
            <Text style={styles.textLocationNeeded}>
              We need your location data...
            </Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => Linking.openURL ('app-settings:')}
              style={styles.btnGoTo}
              styleText={styles.btnGoToText}
            >
              <Text>Go To Permissions</Text>
            </TouchableHighlight>
          </View>}

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  map: {
    height: device.height,
    position: 'absolute',
    width: device.width,
  },
  containerNoLocation: {
    alignItems: 'center',
    height: device.height,
    justifyContent: 'center',
    position: 'absolute',
    width: device.width,
  },
  textLocationNeeded: {
    //fontFamily: fonts.uberMedium,
    fontSize: 16,
    marginBottom: 16,
  },
  btnGoTo: {
    backgroundColor: colors.black,
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnGoToText: {
    color: colors.white,
    //fontFamily: fonts.uberMedium,
    fontSize: 16,
  },
});

export default Explore;
