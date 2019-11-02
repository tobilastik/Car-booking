import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AddNotes from '../containers/AddNotes';
import VisibleNotes from '../containers/VisibleNotes';

export default class Notes extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AddNotes />

        <View>
          <VisibleNotes />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
