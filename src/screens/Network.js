import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {FAB} from 'react-native-paper';
import {BarCodeScanner} from 'expo-barcode-scanner';
import PitchHeader from '../components/PitchHeader';

export default class Network extends Component {
  state = {
    hasCameraPermission: null,
    scanned: true,
    scanButton: false,
  };

  async componentDidMount () {
    this.getPermissionsAsync ();
  }

  getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync (Permissions.CAMERA);
    this.setState ({hasCameraPermission: status === 'granted'});
  };

  render () {
    const {hasCameraPermission, scanned} = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
  }

  openBarCodeScanner () {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={
            this.state.scanned ? undefined : this.handleBarCodeScanned
          }
          style={StyleSheet.absoluteFillObject}
        />

        {this.state.scanned &&
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState ({scanned: false})}
          />}
      </View>
    );
  }
  render () {
    return (
      <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <PitchHeader />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => this.setState ({scanButton: true})}
        />
        {this.state.scanButton ? this.openBarCodeScanner () : null}
      </View>
    );
  }
}
handleBarCodeScanned = ({type, data}) => {
  this.setState ({scanned: true});
  alert (`Bar code with type ${type} and data ${data} has been scanned!`);
};

const styles = StyleSheet.create ({
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
