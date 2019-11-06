import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Howto extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> How to use the App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
