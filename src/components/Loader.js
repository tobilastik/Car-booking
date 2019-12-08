import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export default class Loader extends Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }
}
