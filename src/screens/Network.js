import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Netword extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Network </Text>
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
