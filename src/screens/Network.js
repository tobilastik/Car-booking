import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {FontAwesome} from '@expo/vector-icons';

export default class ListThumbnailExample extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };
  async scanBarCode () {
    this.getPermissionsAsync ();
  }
  getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync (Permissions.CAMERA);
    this.setState ({hasCameraPermission: status === 'granted'});
  };

  render () {
    const {hasCameraPermission, scanned} = this.state;

    // if (hasCameraPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require ('../assets/images/welcome.jpg')}
                />
              </Left>
              <Body>
                <Text>John Snow</Text>
                <Text note numberOfLines={1}>
                  Its time to make a difference...
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        {/* <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned &&
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState ({scanned: false})}
          />} */}

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2b3a75',
              alignItems: 'center',
              position: 'absolute',
              right: 11,
              bottom: 6,
              justifyContent: 'center',
              padding: 20,
              borderRadius: 100,
            }}
            onPress={() => this.scanBarCode ()}
          >

            <FontAwesome name="plus" color="white" size={20} />

          </TouchableOpacity>
        </View>
      </Container>
    );
  }
  handleBarCodeScanned = ({type, data}) => {
    this.setState ({scanned: true});
    alert (`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}
