import React, {Component} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import AddNotes from '../containers/AddNotes';
import VisibleNotes from '../containers/VisibleNotes';
import PitchHeader from './Network';

export default class Notes extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PitchHeader />
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
    marginTop: StatusBar.currentHeight,
    //paddingTop: 40,
  },
});
