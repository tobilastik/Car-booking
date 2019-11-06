import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Thepitch extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> The Pitch </Text>
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
