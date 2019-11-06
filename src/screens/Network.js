import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Button,
} from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {FAB} from 'react-native-paper';
import PitchHeader from '../components/PitchHeader';

class Network extends Component {
  constructor (props) {
    super (props);
    this.state = {
      QrPress: false,
      hasCameraPermission: null,
    };
  }

  componentDidMount () {
    this.getPermissionsAsync ();
  }

  getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync (Permissions.CAMERA);
    this.setState ({hasCameraPermission: status === 'granted'});
  };

  _onPress_QrScan = () => {
    this.setState ({
      QrPress: true,
    });
  };

  handleBarCodeScanned = ({type, data}) => {
    this.setState ({QrPress: false, scanned: true, lastScannedUrl: data});
  };

  renderBarcodeReader = () => {
    const {hasCameraPermission, scanned} = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={{flex: 1, ...StyleSheet.absoluteFillObject}}
        />

        {scanned &&
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState ({scanned: false})}
          />}
      </View>
    );
  };

  render () {
    const {hasCameraPermission, scanned, QrPress} = this.state;
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
    }
    return (
      <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
        <PitchHeader />
        <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {QrPress
              ? <View style={{flex: 1}}>
                  {this.renderBarcodeReader ()}
                </View>
              : <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    atyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>Contact List is Empty</Text>
                  </View>
                  <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={this._onPress_QrScan}
                  />

                </View>}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get ('window').width;
const DEVICE_HEIGHT = Dimensions.get ('window').height;

const styles = StyleSheet.create ({
  container: {
    top: 0,
    flex: 3,
  },
  map: {
    flex: 1,
    height: 130,
  },
  homeHeader: {
    flexDirection: 'column',
    flex: 1,
  },
  homeHeaderImage: {
    flexDirection: 'row',
  },
  homeHederText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
    letterSpacing: 0.81,
    color: '#000104',
    marginTop: '2%',
    marginLeft: '40%',
    marginRight: '3%',
  },
  hederContentContainer: {
    flexDirection: 'row',
    marginTop: '30%',
    marginBottom: '10%',
  },
  qrCodeGeneraterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#add8e6',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Network;
