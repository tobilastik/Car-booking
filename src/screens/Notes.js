import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Notes extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
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
