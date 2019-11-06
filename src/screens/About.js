import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class About extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> About Us </Text>
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
