import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const WIDTH = Dimensions.get ('window').width;
export default class Destination extends Component {
  render () {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 8}}>{'\u25A0'}</Text>
        </View>
        <View style={{flex: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 21, color: '#545454'}}>
            Enter your Destination
          </Text>
        </View>
        <View style={{flex: 1, borderLeftWidth: 1, borderColor: 'white'}}>
          <Ionicons name="md-car" size={22} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    zIndex: 9,
    position: 'absolute',
    flexDirection: 'row',
    width: WIDTH - 40,
    height: 60,
    top: 110,
    left: 20,
    borderRadius: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#0000',
  },
});
